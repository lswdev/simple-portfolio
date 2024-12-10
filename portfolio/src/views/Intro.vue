<template>
  <div id="intro-page">
    <section class="page-contain">
      <div class="item-contain">
        <h2>Siwoo Lee</h2>
        <p>
          배움을 즐기는 4년차 프론트엔드 개발자 입니다. <br>
          <strong>Vue, JavaScript</strong>로 각종 프로젝트에 참여했으며 재직자 및 인턴 대상 퍼블리싱 교육 경험이 있습니다. <br>
          정리된 코드, 효율적인 유지보수와 원활한 협업을 위한 접근 방식을 모색하며 회사에 기여하기 위해 최선을 다하고 있습니다.
        </p>
        <p>현재 서울특별시 중구에 거주하며, <strong>UI/UX 개발</strong> 업무를 맡고 있습니다.</p>
      </div>

      <div class="item-contain">
        <div class="item-title item-grid">Service</div>
      </div>

      <div class="item-contain item-grid">
        <div class="grid-contents">

          <div class="project" v-for="(item, i) in projectList" :key="i">
            <div class="project-date" v-text="item.period"></div>
            <div class="project-detail">
              <b v-text="item.projectTitle"></b>
              <span v-html="item.projectDesc"></span>
            </div>
          </div>

        </div>
        <div class="grid-picture"></div>
      </div>

    </section>
  </div>
</template>

<script>
  export default {
    data:() => ({
      projectList: [
        {
          period: '2024.05 ~ ', projectTitle: 'KDDX 플랫폼 유지보수 및 추가 개발',
          projectDesc: `
            KDDX 프론트엔드 통합 유지보수 <br>
            사용자 중심 화면 구현 및 프론트엔드 기능 개발 <br>
            법인 사용자 이용 화면 및 관리자 페이지 추가 개발 <br>
            B2B 계약 추가 개발 및 UI/UX 커스텀 퍼블리싱 <br>
            Figma를 통한 웹 디자이너 협업 <br>
          `
        },
        {
          period: '2024.02 ~ 2024.04', projectTitle: 'PayGo 근로관리 App',
          projectDesc: `
            PayGo 근로관리 App 랜딩페이지 제작 <br>
            Vue.js를 활용하여 다양한 디바이스 환경에 최적화된 반응형 프론트엔드 UI 구현 <br>
            디자인 변경 사항에 따른 사용자 경험 개선 퍼블리싱 <br>
            Figma를 통한 웹 디자이너 협업
          `
        },
        {
          period: '2023.07 ~ 2024.01', projectTitle: 'KDDX 우편물 디지털 전환시스템',
          projectDesc: `
            KDDX 랜딩페이지 제작 <br>
            통합메시징 서비스(UMS) 관리페이지, 발송 프로세스 및 서식 관리 기능 개발 <br>
            클라이언트단 데이터 미리보기 기능 및 발송 기능 개발 <br>
            전자계약 서식 관리 및 문서 저장 기능 개발 <br>
            Kubenetes 서버 관리 및 운영 서버 배포 <br>
            Figma를 통한 웹 디자이너 협업
          `
        },
        {
          period: '2022.12 ~ 2023.06', projectTitle: '미즈호 전자문서유통플랫폼 meDP시스템',
          projectDesc: `
            meDP 관리자 권한 관리, 사용자 관리 페이지 등 Mixins, Route, Vuex, axios 등의 기술을 이용한 클라이언트 신규 개발 <br>
            CSS 프레임워크 기반 웹 반응형 페이지 퍼블리싱 ( bootstrap-vue ) <br>
          `
        },
        {
          period: '2022.05 ~ 2022.11', projectTitle: 'NH투자증권 모바일 등기',
          projectDesc: `
            Jaspersoft Community Edition 리포팅 툴로 MySQL 데이터베이스와 연동하여 동적 데이터 추출 및 데이터 바인딩 PDF 서식 개발 <br>
            사용자 요구사항에 맞춘 쿼리 작성 및 데이터 분석으로 최적화된 PDF 생성 <br>
            thymeleaf 템플릿 엔진으로 모바일 반응형 이메일, SMS, MMS 템플릿 서식 개발 <br>
            XD를 통한 웹 디자이너 협업
          `
        },
        {
          period: '2021.09 ~ 2022.04', projectTitle: 'KT Paperless 플랫폼',
          projectDesc: `
            KT Paperless 서식 개발 담당자 <br>
            포탈 고객 서비스 이용 등 KT 협업을 통한 개통신청 및 가이드 지원 <br>
            KT Paperless 유지보수 및 추가 개발, 결함리스트 작성 및 디버깅
          `
        },
      ],
    }),
  }
</script>

