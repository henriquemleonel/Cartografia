<template>
  <div class="container">
    <div class="content-center column" :style="{ 'background-color' : selected.color }">

      <!-- identidade da plataforma (selo) -->
      <logo-card class="header" :blackMode="true"/>

      <!-- color line -->
      <multicolor-line class="line mg-top8"/>

      <!-- informações da plataforma -->
      <div class="info">

        <div class="column mg-top16">
          <span class="headline bolder">Cartografia da Cultura - Campo Grande</span>
          <span class="body-2">
            Para o Fórum Municipal de Cultura é muito importante que você, sendo classe artística, produtor cultural,
              instituição ou responsável por estabelecimento, que promova arte e cultura na cidade, participe desta plataforma.
              A cartografia da cultura é uma maneira de dar voz e visibilidade a todos que produzem arte e cultura, sem hierarquias
              e com transparência.
          </span>
        </div>

        <div class="whitespace"></div>

        <div class="mg-top32">
          <span class="headline bold">O cadastro permitirá:</span>
        </div>

        <div class="context column">
          <span class="headline-3 bold">- mapa</span>
          <span class="body-2">
            Adicionar um pin no mapa (sua localização e informações que inserir serão vistos por todos).
            Cada cadastro permitirá que você insira um pin.
          </span>
        </div>

        <div class="context column">
          <span class="headline-3 bold">- agenda</span>
          <span class="body-2">
            Inserir na agenda os eventos que você irá participar ou produzir em Campo Grande. Além de ser mais um local de divulgação
            do seu trabalho, o visitante ao acessar a plataforma, poderá visualizar os eventos que acontecerão nos próximos dias, reunidos num só lugar.
          </span>
        </div>

        <div class="context column">
          <span class="headline-3 bold">- diálogo</span>
          <span class="body-2">
            Propor ou participar de debates que acontecem online, proposto pelo Fórum Municipal de Cultura ou pelos participantes, entre produtores
            artísticos e culturais da cidade.
          </span>
        </div>

      </div>

      <div class="whitespace"></div>

      <!-- formulário de cadastro -->
      <div class="form column">
        <span class="headline bolder">Insira suas informações:</span>

        <div class="row mg-top16" style="justify-content: space-between">
          <q-input dense square outlined class="input" v-model="firstName" label="Nome" />
          <q-input dense square outlined class="input" v-model="lastName" label="Sobrenome" />
        </div>

        <q-input dense square outlined class="input" v-model="email" label="Email" />
        <q-input dense square outlined class="input" v-model="confirmEmail" label="Confirme seu Email" />

        <div class="row" style="justify-content: space-between">
          <q-input dense square outlined class="input" v-model="password" label="Senha" />
          <q-input dense square outlined class="input" v-model="confirmPassword" label="Confirme sua senha" />
        </div>

      </div>

      <div class="whitespace"></div>

      <!-- selecionar categoria -->
      <div class="category column">

        <span class="headline bold">Identifique sua categoria</span>
        <span class="body-2">(A categoria escolhida aparecerá no mapa quando você criar seu pin.
          Escolha sabiamente, não será possível mudar posteriormente).</span>

        <div class="list">
          <q-list v-for="item in options" :key="item.value">

            <q-item clickable @click="emit(item)">

              <q-item-section avatar>

                <q-icon color="pink" size="1rem">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-pin"
                    class="svg-inline--fa fa-map-pin fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                    <path fill="currentColor" d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97
                    0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47
                    144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z">
                    </path>
                  </svg>

                </q-icon>

              </q-item-section>

              <q-item-section class="body-2 bolder"> {{ item.label }} </q-item-section>
            </q-item>

          </q-list>

        </div>

      </div>

      <!-- ações -->
      <div class="actions">

        <div class="terms row">

          <q-checkbox v-model="terms" color="green-10"  true-value="item.category"/>
          <span class="body-2 altoc">Eu li e concordo com os
            <a class="link" href=""><strong>Termos de Uso</strong></a>
            e <a class="link" href="#"><strong>Privacidade.</strong></a>
          </span>

        </div>

        <div class="btn-field row">
          <!-- <q-btn class="btn-cancel">
            <span class="span-btn-cancel">Num quero</span>
          </q-btn> -->
          <q-btn flat @click="register()" class="btn-custom" color="black">
            <span class="span-btn">Cadastre-se</span>
          </q-btn>
        </div>

      </div>

      <div class="whitespace"></div>

    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'About',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      selected: {
        label: 'Dança, Teatro e Circo',
        value: '1',
        color: '#f5f5f5',
      }, // --- selected category
      active: false,
      terms: false, // ----- accept terms?
      options: [
        {
          label: 'Dança, Teatro e Circo',
          value: '1',
          color: '#683931',
        },
        {
          label: 'Escultura',
          value: '2',
          color: '#AD3B3B',
        },
        {
          label: 'Arte Urbana',
          value: '3',
          color: '#C95B40',
        },
        {
          label: 'Arte Digital',
          value: '4',
          color: '#DBB753',
        },
        {
          label: 'Cultura Popular',
          value: '5',
          color: '#E6B545',
        },
        {
          label: 'Museologia',
          value: '6',
          color: '#529E63',
        },
        {
          label: 'Artesanato',
          value: '7',
          color: '#49833A',
        },
        {
          label: 'Fotografia',
          value: '8',
          color: '#254C26',
        },
        {
          label: 'Literatura',
          value: '9',
          color: '#2F5497',
        },
        {
          label: 'Cinema e AudioVisual',
          value: '10',
          color: '#4692C1',
        },
        {
          label: 'Cultura e Representação',
          value: '11',
          color: '#86BCD3',
        },
        {
          label: 'Música',
          value: '12',
          color: '#D3869B',
        },
        {
          label: 'Folclore',
          value: '13',
          color: '#CB6883',
        },
        {
          label: 'Gastronomia',
          value: '14',
          color: '#C44B6E',
        },
        {
          label: 'Moda',
          value: '15',
          color: '#BD6A5C',
        },
        {
          label: 'Produtor Cultural',
          value: '16',
          color: '#AD3B3B',
        },
        {
          label: 'Estabelecimento',
          value: '17',
          color: '#653830',
        },
        {
          label: 'Instituição',
          value: '18',
          color: '#C95B40',
        },
      ],
    };
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
  },
  methods: {
    emit(el) {
      this.selected = el;
      this.active = true;
      console.log(el);
      console.log('selected', this.selected);
    },
    register() {
      this.$store.
       dispatch('register', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        isValid: true,
        isAdmin: false,
        categoryId: this.selected.value,
      })
        .then(response => {
          this.$router.push({ name: 'Profile' })
        })
      console.log('signUp : try signUp')
    },
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

* {
  font-family: 'Helvetica';
  box-sizing: border-box;
}

.container {
  width: 100%;
}

.content-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  margin: 32px;
  // border: 2px solid $f;
  padding: 32px;
  //clip-path: circle(30px at 90% 40px);
  z-index: 0;
  align-items: flex-start;

  @include for-phone-only {
    width: 100%;
    margin: 0px;
    padding: 32px;
  }

  @include for-tablet-portrait-only {
    width: 650px;
    margin-top: 16px;
    padding: 32px;
  }
}

.line {
  margin-top: 32px;
  width: 100%;
}

.info, .form, .terms, .category, .actions {
  margin-top: 16px;
}

.btn-field, .list {
  margin-top: 8px;
}

.form {
  width: 100%;
}

.terms {
  align-items: center;
  margin-left: -8px;

  @include for-phone-only {
    margin-left: 0px;
  }
}

.headline {
  margin-bottom: 8px;
}

.input {
  margin-bottom: 8px;
  font-size: 12px;
  min-width: 49%;

  @include for-phone-only {
    width: 100%;
  }
}

.context {
  margin-top: 8px;
  margin-left: 16px;

  @include for-phone-only {
    margin-left: 0px;
  }
}

// .body, .line, .form {
//   width: 600px;
// }

.terms {
  @include for-phone-only {
    flex-wrap: nowrap;
    align-items: flex-start;
    margin-left: -8px;

    .altoc {
      margin-top: 4px;
    margin-left: 8px;

    }
  }
}

.body-2 {
  text-align: justify;
}

.link {
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
}

.btn-custom {
  box-shadow: none;
  background-color: black;
  border-radius: 0px;
  height: 40px;
  margin-top: 24px;

  &:hover {
    transform: scale(50%);
  }

  @include for-phone-only {
    width: 100%;
  }
}

.btn-custom:hover {
  transform: scale(1.05);
  transition: all 0.2s linear;
}

.span-btn {
  font-weight: bold;
  font-size: 1em;
  color: white;
}

.whitespace {
  height: 150px;

  @include for-phone-only {
    height: 16px;
  }

  @include for-tablet-portrait-only {
    height: 25px;
  }
}

.clip-path {
  // background-color: pink;
  clip-path: circle(100%);
  -webkit-transition: -webkit-clip-path .6s ease-out;
  transition: -webkit-clip-path .6s ease-out;
}

</style>
