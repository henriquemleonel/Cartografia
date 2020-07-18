<template>
  <div class="app-component stepper">
    <!-- header -->
    <div class="stepper-header">
      <identity
        class="identity"
        :black-mode="true"
      />
      <progress-bar
        class="progressbar"
        :current-step="currentStep"
        :steps-title="stepsTitle"
      />
      <color-line class="color-line" />
    </div>
    <!-- content -->
    <div class="stepper-content">
      <!-- SECTION 1 -->
      <section
        v-if="currentStep === 1"
        id="section1"
        class="stepper-section"
      >
        <span class="title-1 bolder mg-top16">Sobre os Diálogos</span>
        <span class="headline-2 bolder mg-top16">Diálogos abertos</span>
        <p class="body-2 mg-top8 justify-text">
          Você poderá iniciar um debate, que aqui chamamos de diálogo, para compartilhar pontos de vista com outras pessoas sobre os assuntos
          que te preocupam em relação à cultura em Campo Grande.
          O espaço de diálogos abertos é destinado aos gestores, produtores, promotores da cultura local e também à comunidade artística. Sendo um desses agentes,
          você poderá expor seus argumentos e abrir uma conversa com todos.
          Considere que o debate não aciona nenhum mecanismo de atuação concreta. Mas alimenta as tomadas de decisão do Fórum Municipal de Cultura,
          identifica a necessidade de encontros presenciais específicos (assembleias, reuniões) como também contribui para a compreensão das necessidades da
          comunidade artística de Campo Grande.
        </p>
        <span class="headline-2 bolder mg-top16"> Recomendações para participar de um diálogo aberto</span>
        <p class="body-2 mg-top8 justify-text">
          1. Para iniciar um debate é necessário que você faça um cadastro na
          <router-link class="link" to="/signUp"><strong>Plataforma Cartografia da Cultura</strong></router-link>.
          Os usuários cadastrados também podem participar das discussões já iniciadas através dos comentários e/ ou indicar se concorda ou não concorda
          clicando nos botões “👍” ou “👎” encontrados em cada debate proposto.
        </p>
        <p class="body-2 mg-top8 justify-text">
          2. Não escreva o título do debate ou frases inteiras em letras maiúsculas. Na Internet, isso é considerado o mesmo que gritar. E ninguém gosta disso.
        </p>
        <p class="body-2 mg-top8 justify-text">
          3. Qualquer debate ou comentário que implique em uma ação ilegal será deletado. Também  serão deletados comentários que tenham a intenção de sabotar o espaço de debate.
        </p>
        <p class="body-2 mg-top8 justify-text">
          4. As críticas duras são bem vindas. Este é um espaço de pensamento livre, mas recomendamos que, ainda que a crítica seja dura, também seja gentil e inteligente.
        </p>
        <p class="body-2 mg-top8 justify-text">
          5. Desfrute deste espaço, das vozes que o preenchem, ele também é seu.
        </p>
      </section>
      <!-- SECTION 2 -->
      <section
        v-if="currentStep === 2"
        id="section2"
        class="stepper-section"
      >
        <span class="title-1 bolder mg-top16">Regras para iniciar um diálogo</span>
        <!-- 1 -->
        <span class="body-2 bolder mg-top32">1. Uma vez feito o login, você poderá:</span>
        <ol>
          <li class="body-2 justify-text">
            Iniciar um debate.
          </li>
          <li class="body-2 justify-text">
            Participar de um debate já iniciado por outro usuário.
          </li>
          <li class="body-2 justify-text">
            Concordar ou não concordar ao votar em um debate iniciado.
          </li>
        </ol>
        <!-- 2 -->
        <span class="body-2 bolder mg-top24">2. Para iniciar o debate: </span>
        <ol class="list">
          <li class="body-2 justify-text">
            insira um título que represente o assunto principal da discussão.
          </li>
          <li class="body-2 justify-text">
            insira um texto com sua argumentação diretamente na plataforma.
          </li>
          <li class="body-2 justify-text">
            escolha uma ou mais categorias relacionada ao assunto que quer discutir.
          </li>
        </ol>
        <!-- 3 -->
        <span class="body-2 bolder mg-top24">3. Uma vez iniciado o debate, você não poderá: </span>
        <ol class="list">
          <li class="body-2 justify-text">
            deletar o debate que você iniciou;
          </li>
          <li class="body-2 justify-text">
            deletar um comentário em um debate que você participou.
          </li>
        </ol>
        <!-- 4 -->
        <span class="body-2 bolder mg-top24">4. Serão deletados: </span>
        <ol class="list">
          <li class="body-2 justify-text">
            os comentários ofensivos, com discurso de ódio ou qualquer ato de comunicação que inferiorize ou incite contra uma pessoa ou grupo,
            tendo por base características como raça, gênero, etnia, nacionalidade, religião, orientação sexual ou outro aspecto passível de discriminação.
          </li>
          <li class="body-2 justify-text">
            qualquer comentário que implique em uma ação ilegal ou que tenham a intenção de sabotar o espaço de debate.
          </li>
        </ol>
        <!-- 5 -->
        <span class="body-2 bolder mg-top24">5. Recomendamos que: </span>
        <ol class="list">
          <li class="body-2 justify-text">
            Insira um texto revisado por você. Veja se está claro e objetivo.
          </li>
          <li class="body-2 justify-text">
            Seja gentil ao dialogar com as outras vozes que têm pontos de vista diferente do seu.
          </li>
        </ol>
        <!-- ACCEPT TERMS -->
        <div class="accept-rules row al-items-center">
          <q-checkbox
            v-model="acceptRules"
            size="32px"
            color="black"
            true-value="item.category"
          />
          <span class="body-2 mg-left8">Eu li e concordo com as regras da plataforma.</span>
          <span class="caption mg-left8">( você deve marcar essa opção para continuar )</span>
        </div>
      </section>
      <!-- SECTION 3 -->
      <section
        v-if="currentStep === 3"
        class="stepper-section"
      >
        <span class="title-2 bolder mg-top16">Crie seu diálogo</span>
        <span class="headline-2 bolder mg-top16">Título do seu diálogo</span>
        <!-- TITLE -->
        <q-input
          v-model="title"
          class="input"
          dense
          square
          filled
          bottom-slots
          :error="$v.title.$error"
          :error-message="titleErrorMessage"
          @blur="$v.title.$touch"
        />

        <span class="headline-2 bolder">Texto do Diálogo</span>
        <!-- CONTENT -->
        <q-input
          v-model="content"
          class="input"
          counter
          dense
          autogrow
          square
          filled
          bottom-slots
          hint="máximo de 2000 caracteres"
          :error="$v.content.$error"
          :error-message="contentErrorMessage"
          @blur="$v.content.$touch"
        />
        <!-- CATEGORY -->
        <div class="category column mg-top16">
          <span class="headline-2 bolder">Identifique sua categoria</span>
          <span class="body-3">Marque as opções que se relacionam ao seu diálogo</span>
          <div class="list mg-top8">
            <q-list id="item" v-for="item in options" :key="item.value">
              <q-item clickable @click="selectCategory(item)">
                <q-item-section avatar>
                  <!-- iconId -1 : index of array of icons (0 a 17) -->
                  <icon-base :iconId="item.value -1" width="16" :setWhite="active" />
                </q-item-section>
                <q-item-section :id="item.value" class="body-3 bolder" :class="{ 'white' : active }"> {{ item.label }} </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </section>
    </div>
    <!-- FOOTER -->
    <div class="stepper-footer">
      <!-- CANCEL -->
      <base-button
        v-if="currentStep === 1"
        class="stepper-btn"
        theme="flat"
        @click="cancel()"
      >
        <i class="fas fa-times btn-icon"></i>
        <span class="body-3 bolder stepper-btn-span mg-left16"> cancelar </span>
      </base-button>
      <!-- BACK -->
      <base-button
        v-if="currentStep != 1"
        class="stepper-btn"
        theme="flat"
        @click="prevStep()"
      >
        <i class="fas fa-arrow-left btn-icon"></i>
        <span class="body-3 bolder stepper-btn-span mg-left16"> voltar </span>
      </base-button>
      <base-button
        v-if="currentStep != numberOfSteps"
        class="stepper-btn"
        theme="flat"
        @click="nextStep()"
      >
        <span class="body-3 bolder stepper-btn-span text-uppercase"> Continuar </span>
        <i class="fas fa-arrow-right btn-icon mg-left16"></i>
      </base-button>
      <base-button
        v-if="currentStep === numberOfSteps"
        class="stepper-btn"
        theme="secondary"
        @click="finish()"
      >
        <!-- <i class="fas fa-plus reply-icon"></i> -->
        <span class="body-3 bolder text-uppercase"> Iniciar diálogo </span>
      </base-button>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { mapGetters } from 'vuex';

import Identity from './Logo.vue';
import ColorLine from './ColorLine.vue';
import ProgressBar from './BaseStepProgressBar.vue';
import BaseButton from './BaseButton.vue';
import iconBase from './iconBase.vue';

export default {
  name: 'TopicCreator',
  components: {
    Identity,
    ColorLine,
    ProgressBar,
    BaseButton,
    iconBase,
  },
  data() {
    return {
      currentStep: 3,
      count: 0,
      numberOfSteps: 3,
      stepsTitle: ['O que são os Diálogos', 'Regras', 'Crie seu Diálogo'],
      acceptRules: false,
      title: '',
      content: '',
      categoryId: null,
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(3),
      validChars: (value) => (/^[a-zA-Z0-9_]+$/ig).test(value),
    },
    content: {
      required,
      maxLength: maxLength(2000),
    },
  },
  computed: {
    ...mapGetters({
      options: 'categories/loadCategories',
    }),
    formIsValid() {
      if (this.$v.$anyError || this.selected === null || this.terms === false) {
        return false;
      }
      return true;
    },
    titleErrorMessage() {
      if (!this.$v.title.required) {
        return 'Esse campo é requerido';
      }
      if (!this.$v.title.validChars) {
        return 'Este campo deve conter apenas letras, números e underline';
      }
      if (!this.$v.title.minLength) {
        return 'Mínimo de três dígitos';
      }
      return '';
    },
    contentErrorMessage() {
      if (!this.$v.title.required) {
        return 'Esse campo é requerido';
      }
      if (!this.$v.title.minLength) {
        return 'Mínimo de três dígitos';
      }
      return '';
    },
  },
  methods: {
    selectCategory(el) {
      console.log('category', el);
      this.categoryId = el.value;
    },
    nextStep() {
      if (this.count <= (this.numberOfSteps)) {
        this.currentStep += 1;
        this.count += 1;
      }
    },
    prevStep() {
      if (this.count >= 0) {
        this.currentStep -= 1;
        this.count -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

$height: 32px;
$width: 32px;
$line-height: 32px;
$primaryColor: black;
$secondaryColor: #ddd;

.stepper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 50px;
  // border: 1px solid #ddd;
}

.stepper-header {
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  // border-bottom: 1px solid #ddd;

  .progressbar {
    margin-top: 24px;
    // display: none;
  }

  .identity {
    display: none;
    margin: 16px 0 32px 0;
  }

  .color-line {
    margin-top: 32px;
  }
}

.stepper-content {
  width: 100%;
  height: 100%;
  padding: 16px;
  // border: 1px solid red;
}

section {
  display: flex;
  flex-direction: column;
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-duration: 1s;
}

ol {
  list-style: lower-latin;
  margin: 0;
}

li {
  margin-left: 32px;
}

.accept-rules {
  margin-top: 32px;
}

.link {
  text-decoration: none;
  color: black;
}

.justify-text {
  text-align: justify;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.input {
  margin-top: 4px;
  margin-bottom: 8px;
}

.stepper-footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 32px 0;
  padding: 0 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;
}

.stepper-btn {
  min-width: 150px;
  transition: 1s ease-in-out;
}

.btn-icon {
  color: $gray2;
}

.stepper-btn-span {
  color: $primaryColor !important;
  letter-spacing: 1px;
}

</style>
