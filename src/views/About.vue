<template>
  <div class="container">

    <!-- <logo-card class="fixed-logo" :blackMode="true"/> -->

    <div class="content-center column">

      <section class="plat">

        <logo-card :blackMode="false"/>

        <multicolor-line class="line margin-top32"/>

        <span class="title-2 bolder"> Sobre </span>
        <p class="body-2 margin-top16">
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

      <section class="team">

        <span class="title-2 bolder">Nosso Time</span>

        <div class="row margin-top16 space-between">

          <q-item class="item" dense v-ripple v-for="item in team" :key="item.name">
            <q-item-section side>
              <q-avatar round size="58px">
                <img :src="item.path" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <span class="body-2 bold"> {{ item.name }} </span>
              </q-item-label>
              <q-item-label caption>
                <span class="caption bold"> {{ item.category }} </span>
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

          <!-- <q-item dense clickable v-ripple>
            <q-item-section side>
              <q-avatar round size="48px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <span class="body-2 bold">Eliane Fraulob</span>
              </q-item-label>
              <q-item-label caption>
                <span class="caption bold">Equipe de Design</span>
              </q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- <q-item dense clickable v-ripple>
            <q-item-section side>
              <q-avatar round size="48px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <span class="body-2 bold">Henrique Leonel</span>
              </q-item-label>
              <q-item-label caption>
                <span class="caption bold">Equipe Dev</span>
              </q-item-label>
            </q-item-section>
          </q-item> -->

          <!-- <q-item dense clickable v-ripple>
            <q-item-section side>
              <q-avatar round size="48px">
                <img src="../assets/statics/avatar01.jpg" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <span class="body-2 bold">Max Hiroito</span>
              </q-item-label>
              <q-item-label caption>
                <span class="caption bold">Equipe Dev</span>
              </q-item-label>
            </q-item-section>
          </q-item> -->

        </div>

      </section>

      <section class="contato">

        <span class="title-2 bolder">Contato</span>

        <div class="links row align-center">

          <a class="caption bold">cartografiadacultura.plataforma@forum.com</a>
          <span class="margin-left16">|</span>

          <div class="row align-center margin-left8">
            <q-btn flat round type="a" target="_blank" size="1.1em" href="https://www.facebook.com/AlgoRitmo.ufms/">
              <q-icon size="1.3em" name="fab fa-facebook-square" color="white"></q-icon>
            </q-btn>
            <a class="caption bold" target="_blank" href="https://www.facebook.com/AlgoRitmo.ufms/">@algoritmo.ufms</a>
          </div>
          <span class="margin-left16">|</span>

          <div class="row align-center margin-left8">
            <q-btn flat round  type="a" target="_blank" size="1.1em" href="https://www.instagram.com/algo.ritmo_/">
              <q-icon size="1.3em" name="fab fa-instagram" color="white"></q-icon>
            </q-btn>
            <a class="caption bold" target="_blank" href="https://www.instagram.com/algo.ritmo_/">@algo.ritmo_</a>
          </div>

        </div>

      </section>

      <section class="colabor row">

        <div class="column info">
          <span class="title-3 bold">Fórum Municipal de Cultura de Campo Grande</span>
          <div class="links row align-center">

            <a class="caption bold">cartografiadacultura.plataforma@forum.com</a>
            <span class="margin-left16">|</span>

            <div class="row align-center margin-left8">
              <q-btn flat round type="a" target="_blank" size="1.1em" href="https://www.facebook.com/AlgoRitmo.ufms/">
                <q-icon size="1.3em" name="fab fa-facebook-square" color="white"></q-icon>
              </q-btn>
              <a class="caption bold" target="_blank" href="https://www.facebook.com/AlgoRitmo.ufms/">@algoritmo.ufms</a>
            </div>
            <span class="margin-left16">|</span>

            <div class="row align-center margin-left8">
              <q-btn flat round  type="a" target="_blank" size="1.1em" href="https://www.instagram.com/algo.ritmo_/">
                <q-icon size="1.3em" name="fab fa-instagram" color="white"></q-icon>
              </q-btn>
              <a class="caption bold" target="_blank" href="https://www.instagram.com/algo.ritmo_/">@algo.ritmo_</a>
            </div>

          </div>

        </div>

      </section>

    </div>

  </div>
</template>

<script>

export default {
  name: 'aboutPage',
  data() {
    return {
      team: [
        { name: 'Juliana Trujillo', category: 'Coordenadora', path: 'https://placeimg.com/500/300/nature' },
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
  padding: 0px;
  height: 200vh;
  overflow: hidden;
}

.content-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  padding: 32px;
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

.plat {
  height: 100vh;
}

.contato, .colabor {
  height: 20vh;
}

.team {
 width: 600px;
 height: 50vh;
}

.item {
  width: 250px;
  margin-bottom: 32px;
}

.info {
  width: 50%;
}

</style>
