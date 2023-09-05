import { Injectable } from '@angular/core';

export interface Character {
  imagem: string;
  label: string;
  descartado: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  /** Personagem sorteado para o jogador */
  private chosenCharacter: Character;
  /** Lista de personalidades no jogo */
  private characters: Character[] = [
    {
      imagem:
        'url(https://conteudo.imguol.com.br/c/esporte/41/2021/07/27/marta-disputa-as-olimpiadas-de-toquio-pela-selecao-brasileira-1627417009042_v2_450x600.jpg)',
      label: 'Marta Vieira da Silva',
      descartado: false,
    },
    {
      imagem:
        'url(https://africanizeoficial.com.br/storage/rs-1200x1200-210430163406-1200-the-weeknd.jpg)',
      label: 'Abel Makkonen Tesfaye',
      descartado: false,
    },
    {
      imagem:
        'url(https://images.mubicdn.net/images/cast_member/45165/cache-390511-1623410063/image-w856.jpg)',
      label: 'Miley Ray Cyrus',
      descartado: false,
    },
    {
      imagem:
        'url(https://i.pinimg.com/originals/48/26/1f/48261f7b86acceb52d1bb2d0ddc309c3.jpg)',
      label: 'Timothée Hal Chalamet',
      descartado: false,
    },
    {
      imagem:
        'url(https://classic.exame.com/wp-content/uploads/2021/05/2021-05-11T181636Z_1_LYNXMPEH4A18L_RTROPTP_4_GENTE-BILLIEEILISH-NOVOLIVRO.jpg?quality=70&strip=info&w=1200)',
      label: "Billie Eilish Pirate Baird O'Connell",
      descartado: false,
    },
    {
      imagem:
        'url(https://img.melhoresfilmes.com.br/unsafe/480x640/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Factors%2F13968.jpg%3Ft%3D20221025001610)',
      label: 'Selton Figueiredo Melo',
      descartado: false,
    },
    {
      imagem:
        'url(https://claudia.abril.com.br/wp-content/uploads/2019/10/claudia_rita_von_hunty1796.jpg?quality=85&strip=info&w=680&resize=1200,800)',
      label: 'Rita Von Hunty',
      descartado: false,
    },
    {
      imagem:
        'url(https://s2.glbimg.com/w6j6XOEhkrTNhWPVe8ZmzspQLhc=/620x466/top/e.glbimg.com/og/ed/f/original/2014/12/10/whoopitheview1.jpg)',
      label: 'Whoopi Goldberg',
      descartado: false,
    },
    {
      imagem:
        'url(https://uploads.metropoles.com/wp-content/uploads/2021/10/08062716/Fernanda-Montenegro-3.jpg)',
      label: 'Fernanda Montenegro',
      descartado: false,
    },
    {
      imagem:
        'url(https://s2-ge.glbimg.com/4EXxUfTPGT0dCLvjMU1LIYW-Q8A=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/r/B/UAyjNmRuGAkokuGjLlwA/whatsapp-image-2021-10-30-at-17.46.39.jpeg)',
      label: 'Rayssa Leal',
      descartado: false,
    },
  ];
  constructor() {
    this.chosenCharacter = JSON.parse(
      localStorage.getItem('chosen-character') || '{}'
    );
  }

  getRandomCharacter(): Character {
    return this.characters[Math.floor(Math.random() * this.characters.length)];
  }

  setChosenCharacter(c: Character): void {
    this.chosenCharacter = c;
    localStorage.setItem(
      'chosen-character',
      JSON.stringify(this.chosenCharacter)
    );
  }

  getChosenCharacter(): Character | null {
    return this.chosenCharacter || null;
  }
}
