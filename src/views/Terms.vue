<template>
  <div class="container">

    <!-- <logo-card class="fixed-logo" :blackMode="true"/> -->
    <div class="content-center column">

      <header class="spaced-32">
        <logo-card :blackMode="true"/>

        <multicolor-line class="line mg-top32"/>
      </header>

      <section class="column spaced-32">

        <span class="title-2 bolder"> Política de Privacidade </span>
        <span class="caption bold">Aviso de proteção de dados</span>
        <p class="body-2 font2 mg-top16">
          1. A navegação pelas informações disponíveis na Plataforma Cartografia da Cultura é anônima.
        </p>
        <p class="body-2 font2 mg-top8">
          2. Para usar as funções oferecidas nesta plataforma, como inserir dados no mapa, inserir dados na
          agenda e participar de um diálogo, o usuário deve se cadastrar e fornecer dados pessoais, de acordo
          com as informações específicas contidas em cada tipo de registro.
        </p>
        <P class="body-2 font2 mg-top8">
          3. Os dados fornecidos pelo usuário serão incorporados e processados
          pelo Fórum Municipal de Cultura de Campo Grande, gestão 2019-2021, com o objetivo de coordenar e promove processos participativos.
        </P>
        <P class="body-2 font2 mg-top8">
          4. Os dados fornecidos tem a finalidade de habilitar a participação da comunidade artística local
          (produtores, promotores, gestores, indivíduos e coletivos) e estimular a autonomia e o engajamento em processos participativos.
        </P>
        <P class="body-2 font2 mg-top8">
          5. O processamento dos dados se dará de forma quantitativa, contabilizando os números e estatísticas dos resultados derivados
          dos processos de participação do cidadão e de consultas públicas e na observação e análise dos dados geo localizados.
        </P>
        <P class="body-2 font2 mg-top8">
          6. A base jurídica para o tratamento dos dados está enquadrada no contexto da Lei 12.965, de 23 de abril de 2014, que estabelece
          princípios, garantias, direitos e deveres para o uso da Internet no Brasil.
        </P>
        <P class="body-2 font2 mg-top8">
          7. Como princípio geral, esta plataforma não compartilha nem divulga as informações obtidas, exceto quando autorizadas pelo usuário,
          ou quando as informações são exigidas pela autoridade judiciária, pelo Ministério Público ou outro caso previsto por lei.
        </P>
        <P class="body-2 font2 mg-top8">
          8. Os dados serão mantidos para a finalidade descrita, desde que você não se oponha ou solicite o cancelamento como usuário da plataforma.
        </P>
        <P class="body-2 font2 mg-top8">
          9. Depois que o cancelamento dos seus dados for solicitado, eles serão bloqueados por um período de 5 anos, e ficarão disponíveis apenas para
          Administrações Públicas, Júris e Tribunais para atender possíveis queixas ou reivindicações. Após este período, os dados serão excluídos.
        </P>
        <P class="body-2 font2 mg-top8">
          10. O interessado poderá exercer os direitos de acesso, retificação, cancelamento e oposição perante o órgão responsável indicado.
        </P>
        <P class="body-2 font2 mg-top8">
          11. A Autoridade Nacional de Proteção de Dados - ANPD, ligada ao Poder Executivo Federal, é a autoridade de controle à qual podem
          ser enviadas reclamações sobre o processamento de dados pessoais.
        </P>

      </section>

      <div class="white-space"></div>

      <section class="column spaced-32">

        <span class="title-2 bolder">Termo de Compromisso</span>
        <span class="caption bold">Aviso de proteção de dados</span>
        <p class="body-2 font2 mg-top16">
          1. A navegação pelas informações disponíveis na Plataforma Cartografia da Cultura é anônima.
        </p>
        <p class="body-2 font2 mg-top8">
          2. Para usar as funções oferecidas nesta plataforma, como inserir dados no mapa, inserir dados na
          agenda e participar de um diálogo, o usuário deve se cadastrar e fornecer dados pessoais, de acordo
          com as informações específicas contidas em cada tipo de registro.
        </p>
        <P class="body-2 font2 mg-top8">
          3. Os dados fornecidos pelo usuário serão incorporados e processados
          pelo Fórum Municipal de Cultura de Campo Grande, gestão 2019-2021, com o objetivo de coordenar e promove processos participativos.
        </P>

      </section>

      <div class="white-space"></div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'termsPage',
  data() {
    return {
    };
  },
  watch: {
  },
  methods: {
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.container {
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.content-center {
  // background-color: black;
  // position: absolute;
  // left: 50%;
  // transform: translateX(-50%);
  width: 800px;
  padding: 16px;
  z-index: 0;
  align-items: flex-start;
  //border: 2px solid white;
}

span, p, a {
  color: black;
}

a {
  text-decoration: none;
}

.link {
  align-items: center;
}

.align-center {
  align-items: center;
}

.white-space {
  height: 60px;
  //border: 2px solid green;
}

header, .plat, .team, .contato, .colabor {
  width: 100%;
}

.line {
  height: 3px;
  background-color: white;
}

// ----------------- transitions ------------------
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.5s linear;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-200px);
  }
  100% {
    transform: translateY(-500px);
  }
}
</style>
