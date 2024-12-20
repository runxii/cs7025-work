<template>
  <h1 style="text-align: center">Resume</h1>
  <div class="pg-w-sidebar">
    <SideBar
        :items="[
        { id: 'education', title: 'Education' },
        { id: 'work', title: 'Work' },
        { id: 'skills', title: 'Skills' }
      ]"
    />
    <div class="content">
      <!-- Education Section -->
      <section id="education">
        <CvDivider title="Education" />
        <div v-for="edu in resumeData.education" :key="edu.degree">
          <div class="cv">
            <div class="cv-title">{{ edu.institution }}</div>
            <div class="cv-period">{{ edu.dates }}</div>
          </div>

          <div class="cv-entry">
            <p>
              <strong>{{ edu.degree }}</strong>
            </p>
            <p>
              {{ edu.location }}
            </p>
            <ul>
              <li v-for="detail in edu.details" :key="detail"><Dot class="smaller active" />{{ detail }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Work Experience Section -->
      <section id="work">
        <CvDivider title="Work Experience" />
        <div v-for="work in resumeData.work" :key="work.title">
          <div class="cv">
            <div class="cv-title">{{ work.title }}</div>
            <div class="cv-period">{{ work.dates }}</div>
          </div>
          <div class="cv-entry">
            <p>
              <strong>{{ work.company }}</strong>, {{ work.location }}
            </p>
            <ul>
              <li v-for="detail in work.details" :key="detail"><Dot class="smaller active" />{{ detail }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects">
        <CvDivider title="Projects" />
        <div v-for="project in resumeData.projects" :key="project.title">
          <div class="cv">
            <div class="cv-title">{{ project.title }}</div>
            <div class="cv-period">{{ project.dates }}</div>
          </div>
          <div class="cv-entry">
            <p>
              <strong>Technologies:</strong> {{ project.tech }}
            </p>
            <ul>
              <li v-for="detail in project.details" :key="detail"><Dot class="smaller active" />{{ detail }}</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Technical Skills Section -->
      <section id="skills">
        <CvDivider title="Skills" />
        <div class="cv">
          <div class="cv-title">Programming Languages</div>
        </div>
        <div class="cv-entry">
          <p>{{ resumeData.skills.languages }}</p>
        </div>

        <div class="cv">
          <div class="cv-title">Developer Tools</div>
        </div>
          <div class="cv-entry">
            <p>{{ resumeData.skills.tools }}</p>
          </div>
      </section>
    </div>
  </div>
</template>

<script>
import resumeData from "@/data/resume.json";
import Dot from "@/components/atoms/dot.vue"
import CvDivider from "@/components/modecules/cv-divider.vue";
import SideBar from "@/components/organisms/sidebar.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Resume",
  components:{
    SideBar,
    CvDivider,
    Dot
  },
  data() {
    return {
      resumeData,
    };
  },
};
</script>

<style>
/* About Me CV parts*/
.cv {
  display: flex;
  padding: 10px;
  margin: 10px;
}

.cv .cv-title {
  width: 75%;
  text-align: left;
  font-weight: bold;
  font-size: 1.5em;
  color: #93bb34;
}

.cv .cv-period {
  width: 25%;
  text-align: right;
  color: gray;
  font-style: italic;
}

.cv-entry {
  padding: 10px;
  margin: 10px;
}

.cv-entry p {
  text-align: justify;
  margin-bottom: 1em;
}

.cv-entry ul {
  text-align: left;
  list-style: none;
}

.cv-entry ul li {
  line-height: 1.2em;
  margin-bottom: 0.4em;
}
</style>