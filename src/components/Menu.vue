<template>

  <div class="nav">
    <q-list>

      <q-expansion-item class="item" group="somegroup" expand-icon-class="text-black">

        <template v-slot:header>
          <q-item-section>
            <span class="menu-text subheading-2">Sobre</span>
          </q-item-section>
        </template>

        <q-card >

          <q-card-section class="padding-8">

            <ul class="navigation-list">

              <li class="navigation-item">
                <router-link class="a" type="link" :to="{ name: 'About' }" exact>
                  <span class="body-2 effect-underline">Plataforma</span>
                </router-link>
              </li>
              <div class="line"/>
              <li class="navigation-item">
                <router-link class="a" ref="link" :to="{ name: 'About', hash:'#frm'} ">
                  <span class="body-2 effect-underline">Fórum</span>
                </router-link>
              </li>
              <div class="line"/>
              <li class="navigation-item">
                  <router-link class="a" ref="link" to="/terms" exact>
                  <span class="body-2 effect-underline">Nossos Termos</span>
                  </router-link>
              </li>
              <div class="line"/>
              <li class="navigation-item">
                  <router-link class="a effect-underline" ref="link" :to="{ name: 'Faq', hash:'#frm'}" exact>
                  <span class="body-2">F.A.Q</span>
                  </router-link>
              </li>
              <div class="line"/>
              <li class="navigation-item">
                  <router-link class="a effect-underline" ref="link" to="/about" exact>
                  <span class="body-2">Contato</span>
                  </router-link>
              </li>
            </ul>
          </q-card-section>

          </q-card>

      </q-expansion-item>

      <q-separator class="separator" />

      <q-expansion-item class="item" group="somegroup" expand-icon-class="text-black">

        <template v-slot:header>
          <q-item-section>
            <span class="menu-text subheading-2">Agenda</span>
          </q-item-section>
        </template>

        <q-card>
          <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator class="separator" />

      <q-expansion-item class="item" group="somegroup" expand-icon-class="text-black">

        <template v-slot:header>
          <q-item-section>
            <span class="menu-text subheading-2">Diálogo</span>
          </q-item-section>
        </template>

        <q-card>
          <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
              commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator class="separator" />

      <q-expansion-item class="item" group="somegroup" to="/sigIn" expand-icon-class="text-black">

        <template v-slot:header>
          <q-item-section>
            <span class="menu-text subheading-2">Login</span>
          </q-item-section>
        </template>
      </q-expansion-item>

      <q-separator class="separator" />

      <q-expansion-item class="item" group="somegroup" expand-icon-class="text-black">

        <template v-slot:header>
          <q-item-section>
            <span class="menu-text subheading-2">Filtro</span>
          </q-item-section>
        </template>

        <q-card>
          <q-card-section>
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

    </q-list>

  </div>

</template>

<script>

export default {
  name: 'Menu-Component',
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';
@import '../styles/mixins.scss';


* {
  font-family: Helvetica;
  letter-spacing: 1px;
}

.nav {
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
}

.item {
  background-color: black;

  &:hover {
    background-color:#fa7f72;
    transition: 0.3s linear;
    .menu-text {
      color: black;
    }
  }
}

.menu-text {
  color: white;
  font-weight: bold;
}

.navigation-list {
  width: 90%;
  list-style: none;
  padding-left: 8px;
  margin: 0px;
}

.a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

.effect-underline:after {
  content: '';
  position: absolute;
  left: 24px;
  display: inline-block;
  height: 1em;
  width: 70%;
  border-bottom: 2px solid;
  margin-top: 10px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0,1);
  transform: scale(0,1);
}

.effect-underline:hover:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.line {
  //background-color: black;
  height: 2px;
  width: 75%;
  margin-top: 4px;
  margin-bottom: 4px;
}

.separator {
  background-color: transparent;
  height: 5px;
}

</style>
