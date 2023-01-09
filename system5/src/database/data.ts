import { TurmaDB } from '../models/Turma';
import { EstudanteDB } from '../models/Estudante';
import { DocenteDB } from '../models/Docente';
import { EspecialidadeDB } from '../models/Especialidade';
import { HobbyDB } from '../models/Hobby';
import { EstudanteHobbyDB } from '../models/EstudanteHobby';
import { DocenteEspecialidadeDB } from '../models/DocenteEspecialidade';

export const turma: TurmaDB[] = [
    {
        id: "001",
        nome: "Turma-barros",
        modulo: "6"
    },
    {
        id: "002",
        nome: "Turma-lamar",
        modulo: "6"	
    }
];

export const estudante: EstudanteDB[] = [
    {
        id: "001",
        nome: "Jeff",
        email: "jeffo@gmail.com",
        data_nasc: "1993-09-11",
        turma_id: "001",
    },
    {
        id: "002",
        nome: "Renato",
        email: "Renato@gmail.com",
        data_nasc: "1991-12-10",
        turma_id: "001",
    },
    {
        id: "003",
        nome: "Juliano",
        email: "juliano@gmail.com",
        data_nasc: "1992-06-15",
        turma_id: "001",
    }
];

export const hobby: HobbyDB[] = [
    {
        id: "001",
        nome: "Assistir"
    },
    {
        id: "002",
        nome: "Fazer Exercícios"
    },
    {
        id: "003",
        nome: "viajar"
    }
];

export const estudante_hobby: EstudanteHobbyDB[] = [
    {
        id: "001",
        estudante_id: "001",
        hobby_id: "001"
    },
    {
        id: "002",
        estudante_id: "002",
        hobby_id: "002"
    },
    {
        id: "003",
        estudante_id: "003",
        hobby_id: "003"
    }
];

export const docente: DocenteDB[] = [
    {
        id: "001",
        nome: "fayra",
        email: "fayra@gmail.com",
        data_nasc: "1998-09-08",
        turma_id: "001"
    },
    {
        id: "002",
        nome: "junior",
        email: "junior@gmail.com",
        data_nasc: "1996-10-02",
        turma_id: "001"
    }
];

export const especialidade: EspecialidadeDB[] = [
    {
        id: "001",
        nome: "typescript"
    },
    {
        id: "002",
        nome: "React"
    }
];

export const docente_especialidade: DocenteEspecialidadeDB[] = [
    {
        id: "001",
        docente_id: "001",
        especialidade_id: "001"
    },
    {
        id: "002",
        docente_id: "002",
        especialidade_id: "002"
    },
];
