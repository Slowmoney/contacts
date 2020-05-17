<template>
  <div class="contact">
    <template v-for="(i,j) in getSearch">
      <div v-on:click="$emit('open-contact',i.id)" class="contact-item" :key="j">
        <div class="contact-item-hr" v-if="i.hr">
          <span>{{i.first_name[0]}}</span>
        </div>
        <div class="contact-item-name">
          <span class="contact-item-name__title">{{i.first_name}} {{i.last_name}}</span>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ContactsList",
  props: {},
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["getContacts", "getSortContacts","getSearch"]),
  

  },
  methods: {
    openContact: e => {
      console.log(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.contact {
  max-width: 400px;
  min-width: 300px;
  user-select: none;
  background-color: #dddddd;
  &-item {
    color: #656b6f;
    &-hr {
      margin: unset;
      height: 20px;
      background-color: #dddddd;
      /* padding-left: 5px; */
      padding: 5px 15px;
      font: 1em "Fira Sans", sans-serif;
      border: none;
    }
    &-name {
      background-color: #eee;
      /*  margin-left: 25px; */
      padding-top: 12px;
      padding-bottom: 12px;
      border: 1px #e7e7e7 solid;
      &__title {
        padding-left: 15px;
        font: 1.2em "Fira Sans", sans-serif;
      }
      &:hover {
        box-shadow: 1px 1px 10px 1px #9e9e9e;
      }
    }
  }
}
</style>
