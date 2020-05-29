<template>
  <div class="topic-view">

    <!-- header -->
    <div class="header">
      <logo class="identity" :blackMode="true"/>
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

      <div class="author row mg-top16">

        <span class="body-3 bolder text-uppercase"> {{ topic.owner.name }} </span>
        <span class="body-3 mg-left8"> | </span>
        <span class=" body-3 bolder mg-left8"> {{ formatDate }} </span>

      </div>

      <p class="body-2 bold mg-top32"> {{ topic.description }} </p>

    </div>

    <div class="topic-footer column">

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
          v-if="isLoggedIn  && currentUser && canEditTopic(currentUser.user.id, topic.owner.id)"
          :to="{ name: 'EditTopic', params: { topicId: topic.id } }"
        >
          <i class="fas fa-pencil-alt reply-icon"></i>
          <span class="body-3 bolder mg-left8"> Editar </span>
        </base-button>

        <!-- v-if cond = > && currentUser && currentUser.canDeleteTopic(topic) -->
        <base-button
          class="user-button mg-left8"
          v-if="isLoggedIn  && currentUser && canEditTopic(currentUser.user.id, topic.owner.id)"
          @click="showConfirmDialog = true"
        >
          <i class="fas fa-trash reply-icon"></i>
          <span class="body-3 bolder mg-left8"> Excluir </span>
        </base-button>

      </div>

      <div class="topic-footer-reply">

        <span class="topic-footer-title headline bolder">Comentários</span>
        <span class="caption bolder mg-left8">( {{ topic.numberOfReplies !== 0 ? topic.numberOfReplies : 'Seja o primero a comentar.' }} )</span>

      </div>

    </div>

    <div class="replies-section">
      <div class="replies-content">
        <reply
          v-for="reply in topic.replies"
          :key="reply._id"
          :reply="reply"
          :category-slug="topic.category.slug"
        />
      </div>
    </div>

    <div class="reply-form">

      <reply-form
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
import Logo from './Logo.vue';

export default {
  components: {
    Logo,
    // Reply,
    BaseButton,
    BaseConfirmDialog,
    ReplyForm,
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
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.topic-view {
  background: #f5f5f5;
  border-radius: 3px;
  padding: 32px;
  // border: 2px solid red;
  max-width: 850px;
}

.header {
  width: 100%;
  margin: 0px 0px 64px 0px;
  // border: 2px solid blue;
}

.topic-content {
  margin: 32px 0px 16px 0px;
  // border: 2px solid pink;
}

.topic-footer {
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-top: 45px;
  padding-bottom: 20px;
  // border: 2px solid green;
}

.topic-footer-reply {
  width: 100%;
  position: relative;
  display: flex;
  justify-items: flex-end;
  // border: 2px solid red;
}

.topic-footer-title {
  align-self: flex-end;
  justify-self: flex-end;
}

.action-buttons {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 32px;
  top: 0px;
}

.user-button {
  color: #fff;
  cursor: pointer;
}

.reset-button {
  height: 35px;
  margin-left: 16px;
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
