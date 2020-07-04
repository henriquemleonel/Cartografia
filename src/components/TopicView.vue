<template>
  <div class="topic-view">

    <!-- header -->
    <div class="header">
      <logo class="identity" :blackMode="true"/>

      <base-button class="reset-btn mg-top8" theme="flat" :to="{ name: 'Topics' }">
        <i class="fas fa-arrow-left text-black"></i>
        <span class="caption bolder mg-left8 text-black"> voltar aos debates </span>
      </base-button>

      <!-- <multicolor-line class="multicolor-line-top"/> -->

    </div>

    <!-- delete field -->
    <base-confirm-dialog
      class="confirm-dialog"
      v-if="showConfirmDialog"
      confirm-button-title="delete"
      dismiss-button-title="cancel"
      @dismiss="showConfirmDialog = false"
      @confirm="$emit('delete')"
    >
      <template #title>
        Delete this topic?
      </template>
      <template #default>
        You cannot undo this action.
      </template>
    </base-confirm-dialog>

    <!-- topic -->
    <div class="topic-content">

      <span class="big-title bolder"> {{ topic.title }} </span>
      <multicolor-line class="multicolor-line-top"/>

      <div class="author row mg-top8">

        <span class="body-3 bolder text-gray"> {{ topic.user.name }} </span>
        <span class="body-3 text-gray mg-left8"> - </span>
        <span class="body-3 text-gray mg-left8"> {{ formatDate }} </span>

      </div>

      <p class="body-2 mg-top32"> {{ topic.content }} </p>

    </div>

    <!-- participate-area -->
    <div class="participate-area">

      <!-- common user -->
        <base-button
          class=""
          @click="onReply"
          v-if="!isLoggedIn"
          theme="flat"
        >
          <!-- <i class="fas fa-plus reply-icon"></i> -->
          <span class="body-2 bolder text-black"> Vote, Comente. Participe! </span>
        </base-button>

      <div class="column">
        <span class="caption text-red"> myVotes: {{ myVotes }}</span>
        <span class="caption text-red"> topic.id: {{ this.topic.id }}</span>
        <span class="caption text-red"> have support: {{ hasBeenSupported }}</span>
        <!-- <span class="caption text-red"> support obejct: {{ supportStatus }}</span> -->
        <span class="caption text-red"> votos a favor: {{ topic.positiveSupports }}</span>
        <span class="caption text-red"> votos contra: {{ topic.negativeSupports }}</span>
      </div>

      <!-- registered user -->
      <div class="participate-content row no-wrap" v-if="isLoggedIn">

        <span id="vote-text" class="headline-2 bolder"> Vote, participe! </span>

        <div class="row">

          <base-button
            class="participate-button"
            :theme="supportStatus === null ? 'secondary' : 'flat'"
            @click="supportThis(true), setVoteColor(true)"
          >
            <q-icon id="vote-icon1" class="vote-icon"  name="far fa-thumbs-up" size="xs"></q-icon>
            <span id="vote-span1" class="caption bolder"> Apoio </span>

          </base-button>

          <base-button
            class="participate-button"
            theme="flat"
            @click="supportThis(false), setVoteColor(false)"
          >
            <q-icon id="vote-icon2" class="vote-icon"  name="far fa-thumbs-down" size="xs"></q-icon>
            <span id="vote-span2" class="caption bolder"> Não apoio </span>

          </base-button>

        </div>

      </div>

    </div>

    <!-- topic footer and owner actions -->
    <div class="topic-footer">

      <div class="topic-footer-reply">

        <q-icon name="far fa-comment"></q-icon>
        <span class="headline-3 text-gray bolder mg-left8">{{ replyes.length !== 0 ? `${replyes.length} comentários` : 'seja o primero a comentar.' }}</span>
        <!-- <span class="topic-footer-title headline-2 bolder">Comentários</span> -->

      </div>

      <div class="action-buttons">

        <!-- botao editar -->
        <base-button
          class="user-button mg-left8"
          v-if="isLoggedIn  && currentUser && canEditTopic(currentUser.user.id, topic.user.id)"
          :to="{ name: 'EditTopic', params: { topicId: topic.id } }"
        >
          <i class="fas fa-pencil-alt reply-icon"></i>
          <span class="body-3 bolder mg-left8"> Editar </span>
        </base-button>

        <!-- v-if cond = > && currentUser && currentUser.canDeleteTopic(topic) -->
        <base-button
          class="user-button mg-left8"
          v-if="isLoggedIn  && currentUser && canEditTopic(currentUser.user.id, topic.user.id)"
          @click="showConfirmDialog = true"
        >
          <i class="fas fa-trash reply-icon"></i>
          <span class="body-3 bolder mg-left8"> Excluir </span>
        </base-button>

      </div>

    </div>

    <q-separator/>

    <!-- reply-section -->
    <div class="replies-content mg-top16">

      <reply
        v-for="reply in replyes"
        :key="reply.id"
        :reply="reply"
        v-on:callReply="replyThis($event)"
      />

    </div>

    <q-separator/>

    <!-- <q-scroll-area
      class="scroll-area"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
    >
    </q-scroll-area> -->

    <!-- reply-form -->
    <div class="reply-form">

      <reply-form
        :replyToTag="replyToTag != null ? replyToTag : null"
        v-if="isLoggedIn"
        ref="replyForm"
      />

    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import Reply from './Reply';

import BaseButton from './BaseButton.vue';
import BaseConfirmDialog from './BaseConfirmDialog.vue';
import ReplyForm from './ReplyForm.vue';
import Reply from './Reply.vue';
import Logo from './Logo.vue';

export default {
  components: {
    Logo,
    BaseButton,
    BaseConfirmDialog,
    ReplyForm,
    Reply,
  },
  props: {
    topic: {
      type: Object,
      default: () => ({}),
    },
    replyes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showConfirmDialog: this.isLoggedIn,
      replyToTag: null,
      thumbStyle: {
        right: '0px',
        top: '16px',
        borderRadius: '0px',
        backgroundColor: '#111111',
        width: '9px',
        heigth: '8px',
        opacity: 0.75,
      },
      barStyle: {
        right: '0px',
        top: '16px',
        borderRadius: '0px',
        backgroundColor: '#eeeeee',
        width: '9px',
        opacity: 0.2,
      },
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'users/isLoggedIn',
      currentUser: 'users/getCurrentUser',
      myVotes: 'users/getMyVotes',
    }),
    formatDate() {
      const d = new Date(this.topic.createdAt);
      const monthNames = ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Junho', 'Julho', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      const month = monthNames[d.getMonth()];
      const year = d.getFullYear();
      let day;
      if (d.getDate().toString().length === 1) {
        day = `0${d.getDate()}`;
      } else {
        day = d.getDate();
      }
      return `${day} de ${month} de ${year}`;
    },
    hasBeenSupported() {
      // nao funfa
      if (this.myVotes.includes((el) => el.topicId === this.topic.id)) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapActions(['setNextRoute']),
    onReply() {
      if (this.isLoggedIn) {
        this.jumpToReplyForm();
      } else {
        this.setNextRoute({ route: this.$route.fullPath }); // seta a nextRoute para redirecionar o usuário para cá
        this.$router.push({ name: 'SignIn' });
      }
    },
    jumpToReplyForm() {
      if (this.$refs.replyForm) {
        this.$refs.replyForm.$el.scrollIntoView();
        this.$refs.replyForm.focus();
      }
    },
    canEditTopic(userId, ownerId) {
      if (userId === ownerId) {
        return true;
      }
      return false;
    },
    replyThis(replyIdToTag) {
      this.jumpToReplyForm();
      this.$store.dispatch('topics/getReplyTag', {
        replyTagId: replyIdToTag,
      }).then((response) => {
        this.replyToTag = response;
        console.log('topicView/replyThis', response);
      }).catch((error) => {
        console.log('error replyToTag', error);
      });
    },
    supportThis(type) {
      if (this.myVotes.some((el) => el.id === this.topic.id)) {
        this.$store.dispatch('users/supportThis', { topicId: this.topic.id, supportType: type })
          .then(() => {
            console.log('topicsView/supportThis', this.topic.id);
          }).catch((error) => {
            console.log('error vote', error);
          });
      } else {
        console.log('tem voto, dispacth(users/reverseSupport');
      }
    },
    setVoteColor(type) {
      if (type !== true) {
        console.log('nao apoiar');
        document.getElementById('vote-span2').style.color = '#AD3B3B';
        document.getElementById('vote-icon2').style.color = '#AD3B3B';
        document.getElementById('vote-icon1').style.color = '#000';
        document.getElementById('vote-span1').style.color = '#000';
      } else {
        console.log('apoiar');
        document.getElementById('vote-span1').style.color = '#254C26';
        document.getElementById('vote-icon1').style.color = '#254C26';
        document.getElementById('vote-icon2').style.color = '#000';
        document.getElementById('vote-span2').style.color = '#000';
      }
    },
    supportStatus() {
      if (this.hasBeenSupported) {
        const index = this.myVotes.findIndex((el) => el.topicId === this.topicId);
        console.log('topicView/supportStatus', this.myVotes[index]);
        return this.myVotes[index];
        // if (this.myVotes[index].supportType === true) {
        //   return true;
        // }
        // return false;
      }
      console.log('topicView/supportStatus: null');
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';


.topic-view {
  background: #fff;
  border-radius: 3px;
  padding: 0px 32px;
  // border: 2px solid red;
  max-width: 800px;
}

.header {
  width: 100%;
  margin: 0px 0px 8px 0px;
}

// .identity {
//   position: absolute;
//   top: 32px;
//   left: 32px;
// }

.reset-btn {
  margin-top: 8px !important;
  width: 180px;
  padding-left: 0px !important;
}

.multicolor-line-top {
  height: 3px;
  margin-top: 4px;
}

.topic-content {
  margin: 16px 0px 8px 0px;
}

p {
  margin: 16px 0px;
}

.participate-area {
  width: 100%;
  // min-height: 16px;
  margin-bottom: 8px;
}

.participate-content {
  position: relative;
  align-self: flex-end;
  align-items: center;
  justify-items: center;
  padding: 8px 0px 8px 0px;
}

#vote-text {
  color: black;
  margin-top: -8px;
  text-align: end;
}

.participate-button {
  margin-left: 8px;
}

.vote-icon {
  color: black;
  margin-right: 8px;
}

#vote-span1, #vote-span2 {
  color: black;
}

.topic-footer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: calc(100% - 32px);
  margin-top: 0px;
  padding: 8px 8px 0px 0px;
  // border: 2px solid green;
}

.topic-footer-reply {
  width: 50%;
  display: flex;
  justify-items: flex-end;
  align-items: center;
  // border: 2px solid red;
}

.topic-footer-title {
  margin-left: 8px;
  color: $gray4;
}

.action-buttons {
  display: none;
  width: 50%;
  // display: flex;
  // flex-direction: row-reverse;
  // align-items: flex-end;
  // justify-items: flex-end;
}

.user-button {
  color: #fff;
  cursor: pointer;
}

.reset-button {
  height: 35px;
  margin-right: 16px;
}

.scroll-area {
  height: 700px;
  width: 100%;
  padding-right: 16px;
  margin-top: 8px;
}

.reset-reply-icon {
  font-size: 12px;
}

.reply-icon {
  margin-right: 3px;
}

.reply {
  border-top: 1px solid #F0F0F0;
  padding: 30px 0;
}

</style>
