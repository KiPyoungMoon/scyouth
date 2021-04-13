<template>
  <div id="nav">
    <ul class="menu">
      <li v-on:mouseover="menuHome = true" v-on:mouseleave="menuHome = false">
        <router-link to="/">홈으로</router-link>
      </li>
      <li v-on:mouseover="menuAbout = true" v-on:mouseleave="menuAbout = false">
        <router-link to="/about">시설소개</router-link>
        <transition name="fade">
          <ul v-if="menuAbout" v-on:click="menuAbout = false">
            <AboutForNav />
          </ul>
        </transition>
      </li>
      <li v-on:mouseover="menuFacility = true" v-on:mouseleave="menuFacility = false">
        <router-link to="/facility">시설안내</router-link>
        <transition name="fade">
          <ul v-if="menuFacility" v-on:click="menuFacility = false">
            <li><router-link to="/facility/lodgment">숙박시설</router-link></li>
            <li>
              <router-link to="/facility/education">교육시설</router-link>
            </li>
            <li><router-link to="/facility/exercise">운동시설</router-link></li>
            <li>
              <router-link to="/facility/youthHotel">유스호텔</router-link>
            </li>
            <li><router-link to="/facility/camping">캠핑장</router-link></li>
          </ul>
        </transition>
      </li>
      <li v-on:mouseover="menuReservation = true" v-on:mouseleave="menuReservation = false">
        <router-link to="/reservation">시설이용 예약</router-link>
        <transition name="fade">
          <ul v-if="menuReservation" v-on:click="menuReservation = false">
            <li>
              <router-link to="/reservation/retreat">수련원 예약</router-link>
            </li>
            <li>
              <router-link to="/reservation/camping">캠핑장 예약</router-link>
            </li>
          </ul>
        </transition>
      </li>
      <li v-on:mouseover="menuComunity = true" v-on:mouseleave="menuComunity = false">
        <router-link to="/comunity">커뮤니티</router-link>
        <transition name="fade">
          <ul v-if="menuComunity" v-on:click="menuComunity = false">
            <li><router-link to="/comunity/notice">공지사항</router-link></li>
            <li><router-link to="/comunity/qna">질문 게시판</router-link></li>
            <li>
              <router-link to="/comunity/youthTrainingPhoto">수련원 활동 사진</router-link>
            </li>
          </ul>
        </transition>
      </li>
      <li v-on:mouseover="menuSightseeingAround = true" v-on:mouseleave="menuSightseeingAround = false">
        <router-link to="/sightseeingAround">주변관광</router-link>
        <transition name="fade">
          <ul v-if="menuSightseeingAround" v-on:click="menuSightseeingAround = false">
            <li>
              <router-link to="/sightseeingAround/suncheonBay">순천만</router-link>
            </li>
            <li>
              <router-link to="/sightseeingAround/naganeupseong">낙안읍성</router-link>
            </li>
            <li>
              <router-link to="/sightseeingAround/goindolPark">고인돌 공원</router-link>
            </li>
          </ul>
        </transition>
      </li>
      <li v-on:mouseover="menuTransportationGuide = true" v-on:mouseleave="menuTransportationGuide = false">
        <router-link to="/transportationGuide">교통안내</router-link>
        <transition name="fade">
          <ul v-if="menuTransportationGuide" v-on:click="menuTransportationGuide = false">
            <li>
              <router-link to="/transportationGuide/wayToCome">오시는길</router-link>
            </li>
            <li>
              <router-link to="/transportationGuide/directions">약도안내</router-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import AboutForNav from "@/components/router/AboutForNav.vue";
export default {
  components: {
    AboutForNav,
  },

  data() {
    return {
      menuHome: false,
      menuAbout: false,
      menuFacility: false,
      menuReservation: false,
      menuComunity: false,
      menuSightseeingAround: false,
      menuTransportationGuide: false,
    };
  },
};
</script>

<style scoped>
#nav {
  background-color: #2c3e50;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
}

.menu {
  font: 14px/1.5 "Open Sans", sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu a {
  display: block;
  padding: 7px;
  color: #fff;
  text-decoration: none;
}

.menu li {
  display: block;
  float: left;
  position: relative;
  color: #fff;
  min-width: 145px;
}

.menu li ul {
  position: absolute;
  left: 0;
  top: 40px;
  margin: 0;
  padding: 0;
}

.menu li ul li {
  background: #2c3e50;
  transition: background 0.2s;
}

.menu li ul li:hover {
  background: #444;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
