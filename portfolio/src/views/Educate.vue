
<template>
  <div id="education-page">
    <div class="page-contain">
      <div class="item-contain">
        <div class="item-title item-grid"> Education </div>
        <div class="educate-grid">
          <div class="educate-card" v-for="(item, index) in eduList" :key="index">
            <div><!-- card 내용 -->
              <div class="card-date">{{ item.eduDt }}</div>
              <div class="card-name">{{ item.eduNm }}</div>
              <div class="card-company">{{ item.eduComp }}</div>
            </div>
            <div><!-- card Icon -->
              <span v-for="(skill, i) in item.eduSkill" :key="i" :title="skill">
                <img :src="require(`@/assets/icon/${skill}.png`)" :alt="`${skill} 아이콘`">
              </span>
            </div>
<!--            <div v-html="item.eduDesc"></div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { educations } from "@/myInfo";

export default {
  data:() =>  ({
    eduList: educations
  }),
}
</script>