<template >
  <form class="create" @submit="pushContact">
    <hr class="create-edit-hr" />
    <div class="create-edit">
      <div :class="'create-edit-foto'">
        {{lang[6]}} URL:
        <input class="create-edit-foto__input" type="url" v-model="create.foto" />
      </div>
    </div>
    <hr class="create-edit-hr" />
    <div class="create-edit">
      <div :class="'create-edit-first_name'">
        {{lang[1]}}:
        <input
          required
          class="create-edit-first_name__input"
          type="text"
          v-model="create.first_name"
        />
      </div>
    </div>
    <hr class="create-edit-hr" />
    <div class="create-edit">
      <div :class="'create-edit-first_name'">
        {{lang[2]}}:
        <input
          class="create-edit-first_name__input"
          type="text"
          v-model="create.last_name"
        />
      </div>
    </div>
    <hr class="create-edit-hr" />
    <div class="create-edit">
      <div :class="'create-edit-number'">
        <div :class="'create-edit-number__label'">
          {{lang[7]}}:
          <input
            class="create-edit-number__input"
            placeholder="071-123-4567"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            type="tel"
            v-model="create.number"
          />
        </div>
      </div>
    </div>
    <hr class="create-edit-hr" />
    <div class="create-edit">
      <div :class="'create-edit-email'">
        <div :class="'create-edit-email__label'">
          <span :class="'create-edit-email__title'">{{lang[3] }}:</span>
          <input class="create-edit-email__input" type="email" v-model="create.email" />
        </div>
      </div>
    </div>
    <hr class="create-edit-hr" />
    <div class="create-edit">
      <div :class="'create-edit-birsday'">
        <div :class="'create-edit-birsday__label'">
          <span :class="'create-edit-birsday__title'">{{lang[4] }}:</span>
          <input
            pattern="[0-9]{2}/[0-9]{2}"
            class="create-edit-birsday__input"
            type="date"
            v-model="create.birsday"
          />
        </div>
      </div>
    </div>
    <hr class="create-edit-hr" />
    <div class="create-edit">
      <div :class="'create-edit-website'">
        <div :class="'create-edit-website__label'">
          <span :class="'create-edit-website__title'">{{lang[5] }}:</span>
          <input class="create-edit-website__input" type="text" v-model="create.website" />
        </div>
      </div>
    </div>
    <hr class="create-edit-hr" />
    <template v-for="(item, index) in create.tags">
      <div class="create-edit-tags" :key="index">
        <div :class="'create-edit-tags__label'">
          <span>{{item}}</span>

          <button @click="deleteTag" class="create-edit-tags-remove__btn" :data-name="item">&#9932;</button>
        </div>
      </div>
    </template>
    <template>
      <div class="create-edit-tags-add">
        <select class="create-edit-tags-select" @change="addTag">
          <option value selected disabled hidden>Добавить</option>
          <template v-for="(item, index) in contactTags">
            <option v-if="create.tags.indexOf(item)===-1" :key="index">{{item}}</option>
          </template>
        </select>
      </div>
    </template>
    <hr class="create-edit-hr" />
    <div class="create-edit">
      <div class="create-edit-submit">
        <button class="save create-edit-submit__btn" type="submit">Сохранить</button>
      </div>
    </div>
    <div class="create-edit" v-if="mode=='edit'">
      <div class="create-edit-submit">
        <button @click="$emit('remove',contactid)" class="remove create-edit-submit__btn">Удалить</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
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
      ],
      create: {
        first_name: "",
        last_name: "",
        email: "",
        birsday: "",
        website: "",
        foto: "",
        number: "",
        tags: []
      }
    };
  },
  props: {
    mode: String,
    contactid: {
      type: Number
    }
  },
  created() {
    this.fillCreateObj();
    this.create.tags = this.create.tags ? this.create.tags : [];
  },
  methods: {
    pushContact(e) {
      e.preventDefault();
      this.create.foto = this.create.foto == "" ? "" : this.create.foto;
      this.create.birsday = this.create.birsday.replace(/-/g, "/");
      if (this.mode == "create") {
        this.$store.commit("addNew", this.create);
      } else if (this.mode == "edit") {
        this.create.id = this.contactid;
        this.$store.commit("edit", this.create);
      }
      this.$emit("save");
    },
    addTag(e) {
      this.create.tags = this.create.tags ? this.create.tags : [];
      this.create.tags.push(e.target.value);
      e.target.options.selectedIndex = 0;
    },
    deleteTag(e) {
      e.preventDefault();
      this.create.tags.splice(
        this.create.tags.indexOf(e.target.dataset.name),
        1
      );
    },
    fillCreateObj() {
      if (this.mode == "edit") {
        Object.keys(this.create).map(e => {
          this.create[e] = this.$store.getters.getContactById(this.contactid)[
            e
          ];
        });
      } else if (this.mode == "create") {
        Object.keys(this.create).map(e => {
          this.create[e] = "";
        });
      }
    },
  },
  computed: {
    ...mapMutations(["addNew"]),
    ...mapState(["contactTags"])
  }
};
</script>

<style lang="scss" scoped>
.remove {
  background-color: #a71d21;
}
.save {
  background-color: #673ab7;
}
img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
input {
  height: 30px;
  margin-left: 15px;
  outline: none;
  border: 0;
  background-color: #dddddd;
}
.create {
  &-edit {
    padding: 5px 15px;
    color: #656b6f;
    font: small-caps 1em "Fira Sans", sans-serif;
    &-tags {
      &-select {
        width: 100px;
        height: 20px;
        margin-left: 15px;
      }
      &__label {
        height: 20px;
        padding: 15px;
        background-color: #e7e7e7;
        font: small-caps 1em "Fira Sans", sans-serif;
        color: #656b6f;
      }
    }
    &-submit {
      &__btn {
        width: 349px;
        height: 30px;
        margin: auto;
        border: 0;

        color: #c5c7c8;
        font: small-caps 0.9em "Fira Sans", sans-serif;
      }
    }
    &-foto {
      &__input {
      }
      &__label {
      }
    }
    &-hr {
      color: #c0c0c0;
      border: none;
      background-color: #c0c0c0;
      height: 1px;

      width: 95%;
    }
    &-first_name {
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
    }
    &-email {
    }
    &-website {
    }
  }
}
</style>