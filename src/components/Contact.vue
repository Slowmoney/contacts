<template >
  <div class="view" v-if="contactid!=0">
    <div class="view-edit-foto">
      <div class="view-edit-foto__img">
        <img v-if="contact.foto" :src="contact.foto" />
      </div>
    </div>
    <hr class="view-edit-hr" />
    <div class="view-edit">
      <div :class="'view-edit-name'">
        <div :class="'view-edit-name__label'">{{contact.first_name }} {{contact.last_name }}</div>
      </div>
    </div>
    <hr class="view-edit-hr" />
    <div class="view-edit">
      <div :class="'view-edit-number'">
        <div :class="'view-edit-number__label'">
          {{lang[7] }}
          <br />
          {{contact.number }}
        </div>
      </div>
    </div>
    <hr class="view-edit-hr" />
    <div class="view-edit">
      <div :class="'view-edit-email'">
        <div :class="'view-edit-email__label'">
          <span :class="'view-edit-email__title'">{{lang[3] }}:</span>
          <span :class="'view-edit-email__value'">{{contact.email }}</span>
        </div>
      </div>
    </div>
    <hr class="view-edit-hr" />
    <div class="view-edit">
      <div :class="'view-edit-birsday'">
        <div :class="'view-edit-birsday__label'">
          <span :class="'view-edit-birsday__title'">{{lang[4] }}:</span>
          <span :class="'view-edit-birsday__value'">{{contact.birsday }}</span>
        </div>
      </div>
    </div>
    <hr class="view-edit-hr" />
    <div class="view-edit">
      <div :class="'view-edit-website'">
        <div :class="'view-edit-website__label'">
          <span :class="'view-edit-website__title'">{{lang[5] }}:</span>
          <span :class="'view-edit-website__value'">{{contact.website }}</span>
        </div>
      </div>
    </div>
    <hr class="view-edit-hr" />
  </div>
</template>
<script>
export default {
  name: "Contact",
  props: {
    contactid: {
      type: Number,
      required: true
    }
  },
  beforeCreate() {
    this.$store.getters.getLength;
  },
  data() {
    return {
      lang: [
        "Id",
        "Имя",
        "Фамилия",
        "E-mail",
        "Дата рождения",
        "Веб сайт",
        "Фото",
        "Номер"
      ]
    };
  },
  methods: {},
  computed: {
    contact: function() {
      return this.$store.getters.getContactById(this.contactid);
    }
  }
};
</script>
<style lang="scss" scoped>
.hide {
  visibility: hidden;
}
img {
  height: 100%;
  width: 100%;
  border-radius: 100%;
}
.view {
  &-edit {
    padding: 5px 15px;
    color: #656b6f;
    font: small-caps 1em "Fira Sans", sans-serif;

    &-foto {
      margin: auto;
      width: 70%;
      margin-top: 35px;
      margin-bottom: 35px;
      max-width: 375px;
      image-rendering: pixelated;
      &__img {
        height: 280px;
        background-size: cover;
        width: 280px;
        border: 1px #eee solid;
        border-radius: 100%;
        box-shadow: 1px 1px 8px 0px #9e9e9e;
      }
    }
    &-hr {
      color: #c0c0c0;
      border: none;
      background-color: #c0c0c0;
      height: 1px;

      width: 95%;
    }
    &-name {
      margin: auto;
      width: max-content;
      &__label {
        color: #656b6f;

        font: small-caps 1.4em "Fira Sans", sans-serif;
      }
    }
    &-number {
      padding: 5px 5px;
      &__label {
        color: #656b6f;
        font: 1.2em sans-serif;
      }
    }
    &-birsday {
      &__value {
        font: 1em sans-serif;
      }
    }
    &-email {
      &__value {
        font: 1em sans-serif;
      }
    }
    &-website {
      &__value {
        font: 1em sans-serif;
      }
    }
  }
}
</style>
