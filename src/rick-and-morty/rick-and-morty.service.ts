import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

import { Character } from './interfaces/character.interface'
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

const API_URL = 'https://rickandmortyapi.com/api/character';

@Injectable()
export class RickAndMortyService { 

    private characters: Character[] = [];

    async findAll(paginationDto:PaginationDto){
        const{limit, skip} = paginationDto;
        const page = Math.floor(skip / limit) + 1;

        try{
            const {data} = await axios.get(`${API_URL}/?page=${page}`);

            if (this.characters.length === 0) {
            const { data } = await axios.get(`${API_URL}/?page=${page}`);
            this.characters = data.results.map((c) => ({
                id: c.id,
                name: c.name,
                status: c.status,
                species: c.species,
                gender: c.gender,
            }));
            console.log(this.characters);
            }

            return{
                total: data.info.count,
                limit,
                skip,
                results: data.results.slice(0,limit),
            };
        }catch (error) {
            this.handlerErrors(error);
        }
    }
    
    async findOne(id: number) {
        try {
            const found = this.characters.find((c) => Number(c.id) === Number(id));
            if (!found) {
            throw new NotFoundException(`Personaje con id ${id} no encontrado`);
            }
            return found;
        } catch {
        throw new NotFoundException(`Personaje con id ${id} no encontrado`);
            }
    }
    
    async create(createCharacterDto: CreateCharacterDto) {
        try{
            const newId =
                this.characters.length > 0
                ? Math.max(...this.characters.map((c) => c.id)) + 1
                : 1;

            const newCharacter = { id: newId, ...createCharacterDto };
            this.characters.push(newCharacter);

            return { message: 'Creación simulada', data: newCharacter };

        }catch (error) {
            this.handlerErrors(error);
        }
    }


    async update(id: number, updateCharacterDto : UpdateCharacterDto) {
        try{
            const index = this.characters.findIndex((c) => Number(c.id) === Number(id));

            if (index === -1) {
            throw new NotFoundException(`No se encontró personaje con id ${id}`);
            }
            
            
            this.characters[index] = { ...this.characters[index], ...updateCharacterDto };
            return {  message: 'Personaje actualizado', data: this.characters[index],};
        }catch (error) {
            this.handlerErrors(error);
        }
    }

    async remove(id: number) {
        try {
            const index = this.characters.findIndex((c) => Number(c.id) === Number(id));
            if (index === -1) {
            throw new NotFoundException(`No se encontró personaje con id ${id}`);
            }

            const deleted = this.characters.splice(index, 1);
            return { message: 'Personaje eliminado localmente', deleted: deleted[0],};
        }catch (error) {
            this.handlerErrors(error);
        }
    }
 

    handlerErrors(error: Error){
        throw new BadRequestException(error.message);
    }

}
