<template>
  <div class="topic-view">

    <!-- header -->
    <div class="header">
      <logo class="identity" :blackMode="true"/>
      <multicolor-line class="line mg-top32"/>

      <q-btn class="reset-btn mg-top16" flat :to="{ name: 'Topics' }">
        <i class="fas fa-arrow-left"></i>
        <span class="caption bolder mg-left8"> voltar aos debates </span>
      </q-btn>
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

      <div class="author row">

        <span class="body-3 bolder text-gray"> {{ topic.user.name }} </span>
        <span class="body-3 text-gray mg-left8"> - </span>
        <span class="body-3 text-gray mg-left8"> {{ formatDate }} </span>

      </div>

      <p class="body-2 bold mg-top24"> {{ topic.description }} </p>

    </div>

    <!-- <q-separator/> -->

    <!-- topic footer and user actions -->
    <div class="topic-footer">

      <div class="topic-footer-reply">

        <span class="topic-footer-title text-gray headline-2 bolder">Comentários</span>
        <span class="caption text-gray bolder mg-left8">( {{ topic.replies.length !== 0 ? topic.replies.length : 'Seja o primero a comentar.' }} )</span>

      </div>

      <div class="action-buttons">

        <!-- botão forceSignIn -->
        <base-button
          class="reset-button"
          @click="onReply"
          v-if="!isLoggedIn"
        >
          <!-- <i class="fas fa-plus reply-icon"></i> -->
          <span class="body-3 bolder"> Comentar </span>
        </base-button>

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
    <q-scroll-area
      class="scroll-area"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
    >
      <div class="replies-content">

        <reply
          v-for="reply in topic.replies"
          :key="reply.id"
          :reply="reply"
          v-on:callReply="replyThis($event)"
        />

      </div>

    </q-scroll-area>

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
    // Reply,
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
    }),
    formatDate() {
      const d = new Date(this.topic.date);
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
  margin: 0px 0px 32px 0px;
  // border: 2px solid blue;
}

.topic-content {
  margin: 32px 0px 24px 0px;
  // border: 2px solid pink;
}

.topic-footer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: calc(100% - 32px);
  margin-top: 0px;
  padding: 8px;
  // border: 2px solid green;
}

.topic-footer-reply {
  width: 50%;
  display: flex;
  justify-items: flex-end;
  // border: 2px solid red;
}

.topic-footer-title {
  align-self: flex-end;
  justify-self: flex-end;
  margin-left: -8px;
}

.action-buttons {
  width: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  justify-items: flex-end;
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
