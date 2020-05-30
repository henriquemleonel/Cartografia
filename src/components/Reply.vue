<template>
  <div class="reply-component row no-wrap">

    <base-confirm-dialog
      v-if="showConfirmDialog"
      confirm-button-title="delete"
      dismiss-button-title="cancel"
      @dismiss="showConfirmDialog = false"
      @confirm="deleteReply({ replyId: reply.id })"
    >
      <template #title>
        Excluir esse comentário?
      </template>
      <template #default>
        Você não pode desfazer essa ação.
      </template>
    </base-confirm-dialog>

    <div class="avatar">
      <base-avatar
        class="author-left"
        :name="reply.user.name"
        :src="reply.user.avatarUrl"
      />
    </div>

    <div class="reply-container column">

      <!-- reply author and current-user-action -->
      <div class="reply-header">

        <div class="author-right">
          <span class="author-name body-2 bolder">
            {{ reply.user.name }}
          </span>
          <span class="date caption bolder">
            {{ formatDate }}
          </span>
        </div>

        <div
          v-if="!editing"
          class="owner-actions"
        >
          <span class="">alo</span>
          <i
            v-if="isLoggedIn && currentUser && canEditTopic(currentUser.user.id, reply.user.id)"
            class="action-icon fas fa-pencil-alt"
            @click="editReply"
          ></i>
          <i
            v-if="isLoggedIn && currentUser && canEditTopic(currentUser.user.id, reply.user.id)"
            class="action-icon fas fa-trash"
            @click="showConfirmDialog = true"
          ></i>
        </div>

      </div>

      <!-- this reply -->
      <div class="reply-content body-3">

        <template v-if="!editing">
          {{ reply.content }}
        </template>

        <!-- edit -->
        <template v-else>

          <q-input
            v-model="content"
            :disabled="loading"
            dark
            filled
            square
            autogrow
          />

          <div class="action-editing">

            <base-button class="cancel-button" theme="borderless" @click="editing = false">
              <span class="caption bolder">Cancelar</span>
            </base-button>

            <base-button class="save-button" :disabled="loading" @click="saveReply">
              <span class="caption bolder"> {{ loading ? 'Salvando...' : 'Salvar' }} </span>
            </base-button>

          </div>

        </template>

      </div>
      <!-- fim de reply -->

      <!-- reply this and like -->
      <div class="action-replying" v-if="!canEditTopic(currentUser.user.id, reply.user.id)">

        <base-button class="reply-button" theme="borderless" @click="reply">
          <span class="caption bolder" style="color: white;">Responder</span>
        </base-button>
        <i
            v-if="isLoggedIn && currentUser"
            class="action-icon fas fa-thumbs-up"
            @click="likeThisReply"
          ></i>
      </div>
      <!-- fim de reply action -->

    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseConfirmDialog from './BaseConfirmDialog.vue';
import BaseAvatar from './BaseAvatar.vue';
import BaseButton from './BaseButton.vue';


export default {
  components: {
    BaseAvatar,
    BaseButton,
    BaseConfirmDialog,
  },
  props: {
    reply: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showConfirmDialog: false,
      content: '',
      editing: false,
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'users/isLoggedIn',
      currentUser: 'users/getCurrentUser',
    }),
    formatDate() {
      const d = new Date(this.reply.createdAt);
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
    ...mapActions([
      'deleteReply',
      'updateReply',
    ]),
    editReply() {
      this.content = this.reply.content;
      this.editing = true;
    },
    async saveReply() {
      this.loading = true;
      try {
        await this.updateReply({
          replyId: this.reply.id,
          data: { content: this.content },
        });
        this.editing = false;
        this.loading = false;
      } catch (err) {
        this.loading = false;
      }
    },
    async likeThisReply() {
      try {
        await this.likeReply({
          replyId: this.reply.id,
        });
      } catch (error) {
        console.log(error);
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

$primaryColor: #000;

.reply-component {
  margin: 8px 0px 32px 0px;
}

.reply-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-height: 50px;
  position: relative;
}

.author-right {
  width: 40%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.author-name {
  color: #fff;
}

.date {
  color: #fff;
  margin-top: 3px;
}

.owner-actions {
  position: absolute;
  right: 0px !important;
  top: 8px;
  display: flex;
  align-items: center;
  justify-self: flex-end;
}

.action-icon {
  margin-left: 16px;
  color: #fff;
  cursor: pointer;
}

.reply-container {
  padding: 8px 16px 16px 16px;
  margin-left: 8px;
  background-color: #000;
  width: 100%;
}

.reply-content {
  margin: 16px 0px 8px 0px;
  line-height: 1.7;
  color: #fff;
}

.action-editing {
  padding: 8px;
  margin-top: 8px;
}

.save-button {
  margin-right: 8px;
  background-color: #222;
  padding: 8px;

  &:hover {
    cursor: pointer;
  }
}

.cancel-button {
  margin-right: 8px;
  background-color: #222;
  padding: 8px;

  &:hover {
    cursor: pointer;
  }
}

.action-replying {
  align-self: flex-end;
}

.reply-button {
  color: white;

 &:hover {
    cursor: pointer;
  }
}

</style>
