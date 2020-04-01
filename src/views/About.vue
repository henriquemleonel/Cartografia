<template>
  <div class="container">

    <!-- <logo-card class="fixed-logo" :blackMode="true"/> -->

    <div class="content-center column">

      <header class="spaced-32">
        <logo-card :blackMode="false"/>

        <multicolor-line class="line margin-top32"/>
      </header>

      <section class="plat spaced-32">

        <span class="title-2 bolder"> Sobre </span>
        <p class="body-2 font2 margin-top16">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores corporis dicta unde ratione
          eligendi numquam repudiandae maxime tenetur, error temporibus exercitationem quae? Minus ipsa
          ducimus eaque quae dolor, eius saepe! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Soluta dolores commodi nulla, quidem dolore dolorem itaque expedita a iure reiciendis, amet consequuntur nihil,
          eveniet molestiae dignissimos quo blanditiis fuga magni.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores corporis dicta unde ratione
          eligendi numquam repudiandae maxime tenetur, error temporibus exercitationem quae? Minus ipsa
          ducimus eaque quae dolor, eius saepe! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Soluta dolores commodi nulla, quidem dolore dolorem itaque expedita a iure reiciendis, amet consequuntur nihil,
          eveniet molestiae dignissimos quo blanditiis fuga magni.
        </p>

        <!-- <div class="links row">

          <q-btn flat round type="a" target="_blank" size="1.1em" href="https://www.facebook.com/AlgoRitmo.ufms/">
            <q-icon size="1.3em" name="fab fa-facebook-square" color="white"></q-icon>
          </q-btn>

          <q-btn flat round  type="a" target="_blank" size="1.1em" href="https://www.instagram.com/algo.ritmo_/">
            <q-icon size="1.3em" name="fab fa-instagram" color="white"></q-icon>
          </q-btn>

        </div> -->

      </section>

      <div class="white-space"></div>

      <section class="team spaced-32">

        <span class="title-2 bolder">Nosso Time</span>

        <div class="row">

          <q-item class="item spaced-32" dense v-for="item in team" :key="item.name">
            <q-item-section side>
              <q-avatar round size="xl">
                <img :src="item.path" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <span class="body-3 bold"> {{ item.name }} </span>
              </q-item-label>
              <q-item-label caption>
                <span class="caption font2 bold"> {{ item.category }} </span>
              </q-item-label>
              <!-- <q-item-label>
                <q-btn flat round type="a" target="_blank" size="0.7em" href="https://www.facebook.com/AlgoRitmo.ufms/">
                  <q-icon size="1.8em" name="fab fa-facebook-square" color="white"></q-icon>
                </q-btn>
                <q-btn class="margin-left8" flat round type="a" target="_blank" size="0.7em" href="https://www.facebook.com/AlgoRitmo.ufms/">
                  <q-icon size="1.8em" name="fab fa-instagram" color="white"></q-icon>
                </q-btn>
              </q-item-label> -->
            </q-item-section>
          </q-item>

        </div>

      </section>

      <div class="white-space"></div>

      <section class="contato spaced-32">

        <span class="title-2 bolder">Contato</span>

        <div class="links row align-center">

          <a class="caption font2 bold">cartografiadacultura.plataforma@forum.com</a>
          <span class="margin-left16">|</span>

          <div class="row align-center margin-left8">
            <!-- <q-btn flat round type="a" target="_blank" size="md" href="https://www.facebook.com/AlgoRitmo.ufms/">
              <q-icon size="xs" name="fab fa-facebook-square" color="white"></q-icon>
            </q-btn> -->
            <a class="caption font2 bold" target="_blank" href="https://www.facebook.com/AlgoRitmo.ufms/">.facebook</a>
          </div>
          <span class="margin-left16">|</span>

          <div class="row align-center margin-left8">
            <!-- <q-btn flat round  type="a" target="_blank" size="md" href="https://www.instagram.com/algo.ritmo_/">
              <q-icon size="xs" name="fab fa-instagram" color="white"></q-icon>
            </q-btn> -->
            <a class="caption font2 bold" target="_blank" href="https://www.instagram.com/algo.ritmo_/">.instagram</a>
          </div>

        </div>

      </section>

      <div class="white-space"></div>

      <section class="colabor spaced-32">

        <!-- <span class="title-2 bolder">Colaboradores</span> -->

        <div class="row margin-top8">

          <div class="colab-item column spaced-16">

            <!-- <div class="line spaced-8"></div> -->
            <multicolor-line/>

            <div class="colab-box spaced-16">
              <span class="title-3 bold">Fórum Municipal de <br> Cultura de Campo Grande</span>
            </div>

            <div class="links row align-center">

              <span class="caption font2 bold">email@email.com</span>
              <a class="caption font2 bold margin-left16" target="blank" href="https://www.facebook.com/AlgoRitmo.ufms/">.facebook</a>
              <a class="caption font2 bold margin-left16" target="blank" href="https://www.instagram.com/algo.ritmo_/">.instagram</a>

              <!-- <q-btn flat round type="a" target="_blank" size="md" href="https://www.facebook.com/AlgoRitmo.ufms/">
                <q-icon size="sm" name="fab fa-facebook-square" color="white"></q-icon>
              </q-btn> -->
              <!-- <a class="caption bold" target="_blank" href="https://www.facebook.com/AlgoRitmo.ufms/">@algoritmo.ufms</a> -->
              <!-- <q-btn flat round type="a" target="_blank" size="md" href="https://www.instagram.com/algo.ritmo_/">
                <q-icon size="sm" name="fab fa-instagram" color="white"></q-icon>
              </q-btn> -->

            </div>

          </div>

          <div class="colab-item column spaced-16">

            <!-- <div class="line spaced-8"></div> -->
            <multicolor-line/>

            <div class="colab-box spaced-16">
              <span class="title-2 bold">Colabor</span>
            </div>
            <!-- <q-img src="../assets/statics/avatar01.jpg" style="height: 170px; max-width: 300px"/> -->

            <div class="links row align-center">

              <span class="caption font2 bold">email@email.com</span>
              <a class="caption font2 bold margin-left16" target="blank" href="https://www.facebook.com/AlgoRitmo.ufms/">.facebook</a>
              <a class="caption font2 bold margin-left16" target="blank" href="https://www.instagram.com/algo.ritmo_/">.instagram</a>

            </div>

          </div>

        </div>

      </section>

      <div class="white-space"></div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'aboutPage',
  data() {
    return {
      team: [
        { name: 'Juliana Trujillo', category: 'Coordenadora', path: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { name: 'Eliane Fraulob', category: 'Time de Design', path: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { name: 'Henrique Leonel', category: 'Time Dev', path: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { name: 'Max Hiroito', category: 'Time Dev', path: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { name: 'Paulo Domingos', category: 'Time de Design', path: 'https://cdn.quasar.dev/img/parallax2.jpg' },
        { name: 'Eduardo Azevedo', category: 'Time de Design', path: 'https://cdn.quasar.dev/img/parallax2.jpg' },
      ],
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
  background-color: black;
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
  color: white;
}

a {
  text-decoration: none;
}

.links {
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

.plat {
  // border: 2px solid white;
}

.contato, .team {
  // border: 2px solid yellow;
}

.colab-box {
  height: 60px;
  // border: 2px solid pink;
}

.item {
  width: 250px;
  // margin-bottom: 32px;
}

.colab-item {
  min-width: 250px;
  // border: 2px solid white;
}

.colab-item:nth-child(2) {
  margin-left: 32px;
}

.line {
  height: 2px;
  background-color: white;
}

</style>
