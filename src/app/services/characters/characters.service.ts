import { Injectable } from '@angular/core';

export interface Character {
  imagem: string;
  label: string;
  descartado: boolean;
  properties: { [key: string]: string };
}

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  /** Indica quantas imagens foram pré-carregadas completamente */
  private loaded = 0;
  /** Indica se todas as imagens foram pré-carregadas completamente */
  isLoaded = false;
  /** Último índice sorteado aleatoriamente. Usado para impedir repetições */
  private lastRandomIndex = -1;
  /** Personagem sorteado para o jogador */
  private chosenCharacter: Character;
  /** Lista de personalidades no jogo */
  private characters: Character[] = [
    {
      imagem:
        'https://robohash.org/bgset_bg1/deseruntcumqueiure.jpg?size=230x280&set=set1',
      label: 'Herbert Ausello',
      descartado: false,
      properties: {
        'hair-color': 'Blue',
        'eyes-color': 'Indigo',
        profession: 'Nuclear Power Engineer',
        nationality: 'Canada',
        age: '79',
        gender: 'non-binary',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/quibusdamquasdolorum.jpg?size=230x280&set=set1',
      label: 'Derrek Fourcade',
      descartado: false,
      properties: {
        'hair-color': 'Orange',
        'eyes-color': 'Teal',
        profession: 'VP Product Management',
        nationality: 'Argentina',
        age: '62',
        gender: 'male',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/sitrepudiandaequam.jpg?size=230x280&set=set1',
      label: 'Amargo Rouby',
      descartado: false,
      properties: {
        'hair-color': 'Khaki',
        'eyes-color': 'Puce',
        profession: 'Analyst Programmer',
        nationality: 'Bulgaria',
        age: '86',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/sintquosrem.jpg?size=230x280&set=set1',
      label: 'Rustin Scafe',
      descartado: false,
      properties: {
        'hair-color': 'Goldenrod',
        'eyes-color': 'Violet',
        profession: 'VP Marketing',
        nationality: 'China',
        age: '18',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/aspernaturatquefacilis.jpg?size=230x280&set=set1',
      label: 'Honoria Cheetam',
      descartado: false,
      properties: {
        'hair-color': 'Blue',
        'eyes-color': 'Pink',
        profession: 'Geologist IV',
        nationality: 'Zimbabwe',
        age: '56',
        gender: 'male',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/cumdelectusut.jpg?size=230x280&set=set1',
      label: 'Leslie Crosetti',
      descartado: false,
      properties: {
        'hair-color': 'Goldenrod',
        'eyes-color': 'Puce',
        profession: 'Paralegal',
        nationality: 'China',
        age: '39',
        gender: 'non-binary',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/occaecaticorruptiarchitecto.jpg?size=230x280&set=set1',
      label: 'Vic Rosenhaupt',
      descartado: false,
      properties: {
        'hair-color': 'Fuscia',
        'eyes-color': 'Green',
        profession: 'VP Accounting',
        nationality: 'Uzbekistan',
        age: '18',
        gender: 'male',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/delenitiabconsequatur.jpg?size=230x280&set=set1',
      label: 'Rustin Gother',
      descartado: false,
      properties: {
        'hair-color': 'Aquamarine',
        'eyes-color': 'Khaki',
        profession: 'Analog Circuit Design manager',
        nationality: 'Indonesia',
        age: '33',
        gender: 'non-binary',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/aspernaturrepellatexercitationem.jpg?size=230x280&set=set1',
      label: 'Frank Spadelli',
      descartado: false,
      properties: {
        'hair-color': 'Turquoise',
        'eyes-color': 'Green',
        profession: 'Research Nurse',
        nationality: 'Afghanistan',
        age: '26',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/nonquiatenetur.jpg?size=230x280&set=set1',
      label: "Justinn O'Hern",
      descartado: false,
      properties: {
        'hair-color': 'Violet',
        'eyes-color': 'Aquamarine',
        profession: 'Financial Analyst',
        nationality: 'Indonesia',
        age: '78',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/harumetnon.jpg?size=230x280&set=set1',
      label: 'Barr Geggus',
      descartado: false,
      properties: {
        'hair-color': 'Green',
        'eyes-color': 'Maroon',
        profession: 'Teacher',
        nationality: 'China',
        age: '24',
        gender: 'non-binary',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/reiciendisdolorumnobis.jpg?size=230x280&set=set1',
      label: 'Salli Buxton',
      descartado: false,
      properties: {
        'hair-color': 'Fuscia',
        'eyes-color': 'Maroon',
        profession: 'Food Chemist',
        nationality: 'Poland',
        age: '43',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/distinctioutlaboriosam.jpg?size=230x280&set=set1',
      label: 'Susannah Sciusscietto',
      descartado: false,
      properties: {
        'hair-color': 'Turquoise',
        'eyes-color': 'Khaki',
        profession: 'Community Outreach Specialist',
        nationality: 'China',
        age: '40',
        gender: 'male',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/estquivelit.jpg?size=230x280&set=set1',
      label: 'Loella Hardi',
      descartado: false,
      properties: {
        'hair-color': 'Fuscia',
        'eyes-color': 'Mauv',
        profession: 'Payment Adjustment Coordinator',
        nationality: 'Spain',
        age: '59',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/enimquibusdamrerum.jpg?size=230x280&set=set1',
      label: 'Josefa Fransson',
      descartado: false,
      properties: {
        'hair-color': 'Maroon',
        'eyes-color': 'Teal',
        profession: 'Senior Quality Engineer',
        nationality: 'China',
        age: '39',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/dolornondolore.jpg?size=230x280&set=set1',
      label: 'Hall Arnley',
      descartado: false,
      properties: {
        'hair-color': 'Crimson',
        'eyes-color': 'Blue',
        profession: 'Quality Engineer',
        nationality: 'Mexico',
        age: '42',
        gender: 'male',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/voluptatessaepenihil.jpg?size=230x280&set=set1',
      label: 'Maureene Lydden',
      descartado: false,
      properties: {
        'hair-color': 'Red',
        'eyes-color': 'Maroon',
        profession: 'Assistant Professor',
        nationality: 'Bosnia and Herzegovina',
        age: '57',
        gender: 'male',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/aliquamfugasunt.jpg?size=230x280&set=set1',
      label: 'Chane Fear',
      descartado: false,
      properties: {
        'hair-color': 'Blue',
        'eyes-color': 'Yellow',
        profession: 'Environmental Specialist',
        nationality: 'Indonesia',
        age: '35',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/earumabvoluptas.jpg?size=230x280&set=set1',
      label: 'Frederico Gruszka',
      descartado: false,
      properties: {
        'hair-color': 'Goldenrod',
        'eyes-color': 'Maroon',
        profession: 'Sales Representative',
        nationality: 'China',
        age: '64',
        gender: 'non-binary',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/eiusverout.jpg?size=230x280&set=set1',
      label: 'Elfrida Bollam',
      descartado: false,
      properties: {
        'hair-color': 'Orange',
        'eyes-color': 'Fuscia',
        profession: 'Systems Administrator III',
        nationality: 'Russia',
        age: '56',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/earumporrodeserunt.jpg?size=230x280&set=set1',
      label: 'Felicio Hairesnape',
      descartado: false,
      properties: {
        'hair-color': 'Puce',
        'eyes-color': 'Fuscia',
        profession: 'Help Desk Technician',
        nationality: 'Chile',
        age: '49',
        gender: 'non-binary',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/dolorumtemporibusenim.jpg?size=230x280&set=set1',
      label: 'Carie Patullo',
      descartado: false,
      properties: {
        'hair-color': 'Khaki',
        'eyes-color': 'Fuscia',
        profession: 'Staff Accountant III',
        nationality: 'China',
        age: '32',
        gender: 'female',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/minusquasiinventore.jpg?size=230x280&set=set1',
      label: 'Hastie Ellinor',
      descartado: false,
      properties: {
        'hair-color': 'Teal',
        'eyes-color': 'Purple',
        profession: 'Human Resources Manager',
        nationality: 'Thailand',
        age: '67',
        gender: 'male',
      },
    },
    {
      imagem:
        'https://robohash.org/bgset_bg1/omnisautemconsectetur.jpg?size=230x280&set=set1',
      label: 'Benny Dugmore',
      descartado: false,
      properties: {
        'hair-color': 'Teal',
        'eyes-color': 'Crimson',
        profession: 'Quality Control Specialist',
        nationality: 'Equatorial Guinea',
        age: '61',
        gender: 'non-binary',
      },
    },
  ];
  // [
  //   {
  //     imagem:
  //       'url(https://conteudo.imguol.com.br/c/esporte/41/2021/07/27/marta-disputa-as-olimpiadas-de-toquio-pela-selecao-brasileira-1627417009042_v2_450x600.jpg)',
  //     label: 'Marta Vieira da Silva',
  //     descartado: false,
  //   },
  //   {
  //     imagem:
  //       'url(https://africanizeoficial.com.br/storage/rs-1200x1200-210430163406-1200-the-weeknd.jpg)',
  //     label: 'Abel Makkonen Tesfaye',
  //     descartado: false,
  //   },
  //   {
  //     imagem:
  //       'url(https://images.mubicdn.net/images/cast_member/45165/cache-390511-1623410063/image-w856.jpg)',
  //     label: 'Miley Ray Cyrus',
  //     descartado: false,
  //   },
  //   {
  //     imagem:
  //       'url(https://i.pinimg.com/originals/48/26/1f/48261f7b86acceb52d1bb2d0ddc309c3.jpg)',
  //     label: 'Timothée Hal Chalamet',
  //     descartado: false,
  //   },
  //   {
  //     imagem:
  //       'url(https://classic.exame.com/wp-content/uploads/2021/05/2021-05-11T181636Z_1_LYNXMPEH4A18L_RTROPTP_4_GENTE-BILLIEEILISH-NOVOLIVRO.jpg?quality=70&strip=info&w=1200)',
  //     label: "Billie Eilish Pirate Baird O'Connell",
  //     descartado: false,
  //   },
  //   {
  //     imagem:
  //       'url(https://img.melhoresfilmes.com.br/unsafe/480x640/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Factors%2F13968.jpg%3Ft%3D20221025001610)',
  //     label: 'Selton Figueiredo Melo',
  //     descartado: false,
  //   },
  //   {
  //     imagem:
  //       'url(https://claudia.abril.com.br/wp-content/uploads/2019/10/claudia_rita_von_hunty1796.jpg?quality=85&strip=info&w=680&resize=1200,800)',
  //     label: 'Rita Von Hunty',
  //     descartado: false,
  //   },
  //   {
  //     imagem:
  //       'url(https://s2.glbimg.com/w6j6XOEhkrTNhWPVe8ZmzspQLhc=/620x466/top/e.glbimg.com/og/ed/f/original/2014/12/10/whoopitheview1.jpg)',
  //     label: 'Whoopi Goldberg',
  //     descartado: false,
  //   },
  //   {
  //     imagem:
  //       'url(https://uploads.metropoles.com/wp-content/uploads/2021/10/08062716/Fernanda-Montenegro-3.jpg)',
  //     label: 'Fernanda Montenegro',
  //     descartado: false,
  //   },
  //   {
  //     imagem:
  //       'url(https://s2-ge.glbimg.com/4EXxUfTPGT0dCLvjMU1LIYW-Q8A=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/r/B/UAyjNmRuGAkokuGjLlwA/whatsapp-image-2021-10-30-at-17.46.39.jpeg)',
  //     label: 'Rayssa Leal',
  //     descartado: false,
  //   },
  // ];
  constructor() {
    this.chosenCharacter = JSON.parse(
      localStorage.getItem('chosen-character') || '{}'
    );
    this.loadImages();
  }

  /**
   * Retorna um personagem sorteado aleatoriamente, exceto o último sorteado.
   * @returns um personagem elatório
   */
  getRandomCharacter(): Character {
    let r: number;
    do {
      r = Math.floor(Math.random() * this.characters.length);
    } while (r === this.lastRandomIndex);

    this.lastRandomIndex = r;

    return this.characters[r];
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

  loadImages(): void {
    for (let i = 0; i < this.characters.length; i++) {
      let img = new Image();
      img.onload = () => {
        this.loadingDone();
      };
      img.src = this.characters[i].imagem;
    }
  }

  loadingDone() {
    this.loaded++;
    if (this.characters.length == this.loaded) {
      this.isLoaded = true;
      console.log('all images loaded');
    }
  }
}
