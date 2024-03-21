<template>
  <section class="p-6 md:p-28 text-slate-800 text-center">

    <h2 class="text-4xl text-white  bg-black">
      <span class="text-white font-semibold bg-yellow-600 p-3">O</span>ur
      <span class="text-white font-semibold bg-yellow-600 p-3">D</span>irectors
    </h2>
    <h2 class="text-xl my-4">Our Hard Working Team</h2>
    <p class="mx-auto mb-8 w-full md:w-5/6">Meet our dedicated team of professionals who work tirelessly to achieve excellence in every project. With a passion for innovation and a commitment to delivering high-quality results, our team is the driving force behind our success    </p>
    <div class="flex items-center justify-center">
      <div class="container mx-auto p-4">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-evenly"
        >
          <!-- Use a loop to dynamically generate grid items -->
          <div
            v-for="(director, index) in directors"
            :key="index"
            class="bg-black shadow-lg w-5/6 mx-auto"
          >
            <img
              :src="director.image"
              :alt="`Image of ${director.name}`"
              class="w-full h-80 border-4  border-yellow-500 object-top object-cover"
              @click="showDirectorDetails(index)"
            />
            <div class="px-1 w-full py-4 bg-black">
              <div class="font-medium bg-yellow-600  text-white text-xl mb-2 capitalize">
                {{ director.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-if="showModal" @click="closeModal" class="fixed z-10 inset-0  flex items-center justify-center">
    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    <div class="relative bg-white rounded-lg overflow-scroll shadow-xl py-5 max-w-screen-md w-full h-4/5  m-4">
      <img
        :src="selectedDirector.image"
        :alt="`Image of ${selectedDirector.name}`"
        class="w-68  shadow-2xl border-amber-400  border-4 mx-auto rounded-full h-80 object-top object-cover"
      />
      <div class="px-6 py-2 bg-black  text-center">
        <h3 class="text-lg leading-6 mx-auto p-1 font-medium bg-yellow-500 w-fit text-white">
          {{ selectedDirector.name }}
        </h3>
      </div>
      <div class="prose max-w-screen-md p-6" style="max-height: 70vh;">
        <div class="text-justify" v-html="selectedDirector.details"></div>
              <div class="bg-gray-50 px-4 mt-12 mb-5 py-1 sm:px-6 flex items-center justify-end p-4 gap-4 flex-row">
        <button @click="closeModal" type="button" class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-1 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm">
          Close
        </button>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      directors: [
        { 
          name: 'Mr. Patrick Kweku Anti-Brentuo Owusu', 
          image: new URL(`../assets/team/patrick.jpg`,  import.meta.url).href , 
          details:  `<p class="pt-5">Patrick Kweku Anti-Brentuo Owusu, affectionately known as PAT, is a highly motivated professional specializing in corporate governance and risk management. His career is focused on Internal Audit and the Quality Assurance of Internal Audit systems. With a wealth of experience, PAT has conducted quality assurance in various areas such as treasury and financial reporting, credit risk, financial crime, technology and IT systems, security, and markets within the UK banking sector.</p>
                        <p class="pt-5">PAT possesses excellent knowledge and appreciation of forensic accounting, finance, accounting procedures, and security & safety issues. Demonstrating a proactive approach, he has successfully driven efficiency through process improvement, implementing controls to enhance performance with a positive attitude.</p>
                        <p class="pt-5">Currently serving as an Internal Auditor at Barclays Bank PLC in the London Canary Wharf HQ, PAT brings a wealth of experience and understanding of the Ghanaian mining industry from his early career at Lancaster Plant LTD. In this role, he served as a management accountant, providing mining and ore crushing services to the mining industry in Ghana.</p>
                        <p class="pt-5">A member of the Institute of Internal Auditors (IIA) in the UK, PAT has a keen interest in corporate governance and is pursuing a Doctorate level of study at the University of Derby. His research focuses on "Value addition beyond the provision of assurance; empirical assessment of the internal audit function as an effective Corporate Governance tool." Additionally, PAT holds ISO-9001 Auditor certification.</p>
                        <p class="pt-5">His academic achievements include an HND in Accountancy from the Cape Coast Technical University, a BA in Accounting and Finance from the University of Derby, and an MSc in Forensic Accounting from the University of Portsmouth. PAT's commitment to continuous learning and professional development underscores his dedication to making a lasting impact in strengthening assurance and control processes.` 
        },
        {
          name: 'Mr. Parmenas Kwesi Appiah-Adjei', 
          image: new URL('../assets/team/kwesi.jpg',  import.meta.url).href, 
          details: `<p class="pt-5">Parmenas Kwesi Appiah-Adjei, a seasoned professional, holds numerous qualifications, including an ICA (GH) from the Institute of Chartered Accountants (Ghana), IoD-G (Institute of Directors Ghana) membership, and CIT-(GH) membership from the Chartered Institute of Taxation – Ghana. He is also pursuing studies with the Chartered Institute of Taxation UK. Additionally, Parmenas holds an MBA in Accounting and a Bachelor of Commerce from the University of Cape Coast, Ghana.</p>
                    <p class="pt-5">Currently enrolled in the LLB program at Wisconsin International University College, Parmenas boasts a wealth of experience, particularly in the Ghanaian banking sector. With five years of service in various capacities at Procredit Savings & Loans (later acquired by Fidelity Bank Ghana), Parmenas transitioned to HPW Fresh & Dry Ltd in September 2012. This Swiss multinational company, headquartered in Switzerland with plants in Ghana, Cote D'Ivoire, and Kenya, operates in the manufacturing sector, specifically the Fruit Processing sub-sector under the Ghana Free Zones Regime.</p>
                    <p class="pt-5">Over the past decade, Parmenas has ascended through the ranks at HPW Fresh & Dry Ltd, specializing in Finance and Administration. For the last four years, he has held the pivotal position of Finance and Administration Manager, concurrently deputizing for the managing director. His multifaceted role extends to serving as an Institute of Chartered Accountant-Ghana (ICAG) appointee to the Yilo Krobo District Health Audit Committee and participating on the audit committee of HPW Fresh & Dry Ltd.</p>
                    <p class="pt-5">Parmenas's leadership at HPW Fresh and Dry Ltd is marked by successful stewardship of donor-funded projects from international organizations such as Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH, Stichting IDH Sustainable Trade Initiative, DEG-Deutsche Investitions- Und Entwicklungsgesellschaft Mbh, and ADA-Austrian Development Agency. His versatile skills and dedication make him a valuable asset in both financial management and administrative functions.</p>
                  `
        },
        { 
          name: 'Mr. Richard Appiah Samah', 
          image:  new URL('../assets/team/richard.jpg',  import.meta.url).href, 
          details: `<p class="pt-5">RICHARD APPIAH SAMAH IS A very determined, highly reliable and enthusiastic young man with extensive experience in Finance and Management Accounting in the private sector. Richard is also well-versed in internal control systems. He has excellent knowledge, analytical skills, and sound systems and interpersonal skills. Richard holds a Master of Business Administration (MBA) in Accounting and a Bachelor of Business Administration (BBA) in Accounting, all from the Ghana Institute of Public and Business Administration(GIMPA), as well as a Higher National Diploma (HND) in Accounting from Cape Coast Technical University.</p>
                    <p class="pt-5">He has some remarkable experience in the Automotive Industry after successfully establishing a world-class car rental and sales company with international affiliation to Kayak plc in the UAE and Orbitz in the USA as a local Partner. The exemplary leadership skills and professionalism in managing these companies have led to numerous recognitions in the automotive space, both locally and internationally, that have led to the expansion and innovative ways of renting a car in Ghana.</p>
                    <p class="pt-5">Richard is also well-versed in digital marketing, with the introduction of smart rent, making it easy for local and international travellers to move in and out of the airport quickly.</p>
                    ` 
        },
        { 
          name: 'Mr. Eric Mensah', 
          image: new URL('../assets/team/eric.jpg',  import.meta.url).href , 
          details: `<p class="pt-5">Mr. Eric Mensah is a highly experienced engineer at the Ghana Grid Company Limited (GRIDCo), where he plays an instrumental role in the Protection and Control section. With an illustrious career spanning several years in the energy sector of Ghana's industry, Mr. Eric is a true visionary in electrical and electronic engineering. He is also a member of the Ghana Institute of Electrical/Electronics Engineers.</p>
                    <p class="pt-5">Mr. Eric earned a bachelor's in electrical/electronic engineering from Kwame Nkrumah University of Science and Technology in 2018. In 2005, he also completed a Higher National Diploma from the Cape Coast Technical University. He has worked for about sixteen (16) years in the energy sector of Ghana's industry, and over the years, he has played a significant role in the operation and management of the high-voltage transmission system. Most of this has been accomplished by him in Northern Ghana.</p>
                    <p class="pt-5">Mr. Eric has had an impressive engineering career at the Electricity Company of Ghana, spanning four (4) years. He spent two years of his time in the energy distribution sector working as a Maintenance Technician. He then became a Supervisory Control and Data Acquisition (SCADA) Technician Engineer for another two years, showcasing his prowess in advanced engineering technology. He is a seasoned engineer, a true beacon of expertise and dedication. His invaluable experience has positively influenced the driving force behind the nation's power transmission. His passion for excellence inspires us all to reach higher heights.</p>
                    ` 
        },
        {
          name: 'Mr. Stephen Danso Koranteng', 
          image: new URL('../assets/team/danso.jpg',  import.meta.url).href, 
          details: `<p class="pt-5">Stephen Danso Koranteng is a trained and qualified Herbal Doctor with excellent herbal treatment for all kinds of health challenges. Excellent interpersonal and communication skills, meticulous and hardworking, team player spirit, warm personality, excellent community relations, positive-minded and resultoriented, creating the preferred working technique for institutions, which employs professionalism and innovation to provide quality products and services that best satisfy the need or the goal and objectives of the management of the organizations and customers.</p>
                    <p class="pt-5">Mr. SK Donso has internal relationship management expertise with all clients and a broad business awareness and understanding of operations in herbal treatments, management accounting, finance, economics, inventory control and financial accounting. He has management expertise in strategic planning, financial planning, inventory management, and project research management. Mr. Danso has a team player spirit, affable character, ownership mentality and analytical approach towards problem-solving, possession of the can-do attitude/ spirit and full ambition to develop a career as a world team leader and team player spirit in applying professional knowledge and skills.</p>
                    <p class="pt-5">Mr. SK Donso has previously worked with the following companies: SG-SSB as a Treasuring processing officer, back office and cards. Asawinso Rural Bank as a front officer, (Account clerk) Sarlinesta Supermarket as an accountant and supervisor. Grace Preparatory School as General and Agric Science teacher.</p>`
        },

        { 
          name: 'Ing. Solomon Gyebi Boateng', 
          image: new URL('../assets/team/solomon.jpg',  import.meta.url).href , 
          details: `<p class="pt-5">Ing. Solomon Gyebi Boateng is a trained, qualified, and accomplished civil engineer and administrator with vast experience in technical operations and human capital management of engineering firms. He has been chiefly responsible for the integrity and quality of the company’s primary products, including commercial production of raw materials for construction, including quarry and concrete products (Ready Mix and Precast Concrete). Solomon has over two decades of experience in the civil construction industry.</p>
            <p class="pt-5">He is an expert in engineering projects and operations management, technical site supervision, and commercial production of precast concrete products and RMC. He has previously worked as a site and Technical Supervisor with VAMSET Ltd and as a Site and Projects Manager with REIME Ghana Ltd. He was also the Factory and Operations Manager at African Concrete Products (ACP) Ltd and the General and Production Manager at Atlantic Quarry & Concrete Ltd.</p>
            <p class="pt-5">He also worked as General Manager for GEODOMI Concrete Products Ltd with oversite responsibility at Cheshire Quarry (a subsidiary of Geodomi).</p>
            <p class="pt-5">Solomon led the establishment of VPL CONCRETE LTD - a wholly owned Ghanaian Ready Mix Concrete production company located at East Legon Hills in Accra. He assembled the team to acquire land to build the factory, travelled to Europe (I.e., Germany, Belgium, and Turkey) to source for and purchase all the machines and equipment, and supervised the construction of the site, installation, and operation of all the equipment. He also led the recruitment process for all the technical staff currently managing the factory.</p>
            <p class="pt-5">Solomon holds a bachelor’s degree in civil engineering from KAAF University, a Master’s Degree in Engineering Projects Management from Coventry University, UK, and a Higher National Diploma (HND) in civil engineering from Cape Coast Polytechnic. He is a registered member of the Ghana Institution of Engineers.</p>
            ` 
        },
      ],
      showModal: false,
      selectedDirector: null,
    };
  },
  methods: {
    showDirectorDetails(index) {
      this.selectedDirector = this.directors[index];
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedDirector = null;
    },
  },
};
</script>

<style scoped>
  .grid {
    @apply flex flex-wrap justify-center;
  }

  .grid > * {
    @apply flex-none w-5/6 sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4;
    @apply flex flex-col items-center justify-center;
    @apply m-4; 
  }
</style>

