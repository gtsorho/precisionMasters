<template>
        <div class="text-justify text-sm py-3 shadow-lg bg-black text-slate-200 md:px-24">
            <p class="">
                Joining the team at Precision Masters offers numerous benefits and opportunities for professional growth and personal development. Here are some compelling reasons why you should consider becoming an employee <button @click="isFraud = false; showModal = true" class="text-yellow-500 hover:text-yellow-300"> Why Work with Us<i class="bi bi-file-earmark-arrow-down-fill"></i></button>
            </p>
        </div>
        <section  class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 text-justify">
            <div>
                <img src="../assets/Job offers-bro.png" alt="">    
            </div>  
            <div class="flex items-center mx-auto">
                <div class=" h-full">
                    <div class="my-5 shadow-md h-1/2 flex items-center">
                        <p class="text-white my-auto bg-black w-full px-14 py-5 font-medium text-md">(0) Jobs Found</p> 
                    </div>
                    <div class="h-1/2">
                        <form class="w-76 max-w-xl shadow-lg p-5" ref="form"  @submit.prevent="sendEmail()">
                            <div class="flex flex-wrap -mx-3">
                                <div class="w-full px-3">
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" name="subject"  type="text" placeholder="subject">
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full  px-3 mb-6 md:mb-0">
                                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name="message" placeholder="Albuquerque"></textarea>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full  px-3 mb-6 md:mb-0">
                                    <input type="file" id="myFile" @change="validateFile()" required  ref="file" class="inline-flex justify-center w-full   shadow-sm px-4 py-1 bg-gray-200 text-xs font-medium text-black  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-400   sm:text-sm" name="filename">
                                </div>
                            </div>
                            <div>
                                <p class="text-yellow-600 text-xs" >{{msg}}</p>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">
                                <div class="w-full  px-3 mb-6 md:mb-0">
                                    <button type="submit" class="bg-yellow-500 text-white  hover:bg-black px-6 mt-3 py-1 "> Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

          <div v-if="showModal" @click="closeModal" class="fixed z-10 inset-0  flex items-center justify-center">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            <div class="relative bg-white rounded-lg overflow-scroll shadow-xl py-5 max-w-screen-md w-full h-4/5  m-4">
            <div class="px-6 py-2 text-center">
                <div class=" p-4" v-if="isFraud">
                    <h2 class="text-xl px-2 my-4 font-extrabold  bg-black text-white py-4">Fraud Alert <span class="bg-red-600 p-5"><i class="bi px-3 bi-exclamation-triangle-fill font-extrabold "></i></span> </h2>
                    <h3 class="text-lg leading-6 mx-auto p-1 px-5 font-bold bg-yellow-500 w-fit text-white">
                        Employment Fraud Statement
                    </h3>
                </div>
                <div class=" p-4" v-else>
                    <h2 class="text-xl px-2 my-4 font-extrabold  bg-black text-white py-4">Why Work With<span class="bg-yellow-500 font-bold p-5">Us</span> </h2>
                </div>
                <div class=" text-justify px-7 mt-4" v-html="isFraud ? fraudAlert : whyWork"></div>
            </div>
            <div class=" max-w-screen-md" style="max-height: 70vh;">
                
                <div class="bg-gray-50 px-4 mb-5 py-1 sm:px-6 flex items-center justify-end p-4 gap-4 flex-row">
                    <button @click="downloadPDF" v-if="isFraud"  type="button" class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-1 bg-yellow-500 text-base font-medium hover:bg-yellow-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm">
                        Download <i class="bi bi-file-earmark-arrow-down-fill"></i>
                    </button>
                    <button @click="closeModal" type="button" class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-1 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm">
                        Close
                    </button>
                </div>
            </div>

            </div>
        </div>
</template>
<script>
import About from '../components/about.vue'
export default {
    components:{
        About
    },
    data() {
        return {
            showModal:false,
            isFraud:false,
            msg:"",
            fraudAlert:` At PRECISION MASTERS, we are committed to upholding the highest standards of integrity,
                        transparency, and fairness in our recruitment and employment practices. It has come to our
                        attention that individuals and organisations may falsely claim to represent PRECISION
                        MASTERS and offer employment opportunities in exchange for financial gain. We take any
                        instances of employment fraud seriously and want to ensure that all prospective employees
                        are aware of the following:<br>
                        <h4 class="font-bold inline"> 1. Official Channels:</h4> All job openings at PRECISION MASTERS are posted through our
                        official website, reputable job portals, newspapers, or through trusted recruitment
                        agencies that we have formally engaged with. We do not solicit job applications via
                        unsolicited emails, social media messages, or other unofficial channels.<br>
                        <h4 class="font-bold inline"> 2. No Fees: </h4>PRECISION MASTERS does not require any form of payment or financial
                        contribution from job applicants as part of the recruitment process. Beware of any
                        requests for payment for job applications, processing fees, visa assistance, or other
                        related expenses. Such requests are not legitimate and should be reported
                        immediately.<br>
                        <h4 class="font-bold inline"> 3. Verification:</h4> All communication regarding job offers, interviews, and recruitment
                        processes will be conducted through official PRECISION MASTERS email addresses
                        (hr@precisionmasters.org) or phone numbers (+233 303956336 / +233 506239693).
                        If you receive communication claiming to be from PRECISION MASTERS but are
                        unsure of its authenticity, please contact us directly through our official channels to
                        verify its legitimacy.<br>
                        <h4 class="font-bold inline"> 4. Personal Information: </h4>Be cautious about providing personal or sensitive information,
                        such as bank account details, passport numbers, Ghana Card, or other identification
                        documents, to individuals or entities claiming to represent PRECISION MASTERS. We
                        will only request such information after a formal offer of employment has been made
                        through our official channels.<br>
                        <h4 class="font-bold inline"> 5. Reporting Fraud: </h4>If you encounter any suspicious activity related to employment offers
                        purportedly from PRECISION MASTERS, or if you have any doubts or concerns about
                        the legitimacy of a job opportunity, please report it to us immediately. You can contact
                        our Human Resources department or use the contact information provided on our
                        official website.<br>
                        PRECISION MASTERS is committed to maintaining a safe, fair, and respectful work
                        environment for all employees. We appreciate your cooperation in helping us combat
                        employment fraud and protect the integrity of our recruitment process.`,
            whyWork:`<h1 class=" text-justify font-extrabold mt-5">WHY WORK WITH US</h1>
                        Joining the team at Precision Masters offers numerous benefits and opportunities for
                        professional growth and personal development. Here are some compelling reasons why you
                        should consider becoming an employee:<br>
                        <h4 class="font-bold inline"> 1. Dynamic Work Environment:</h4> At Precision Masters, you'll be part of a dynamic and
                        innovative team that is passionate about quarrying and committed to excellence. Our
                        work environment fosters collaboration, creativity, and continuous learning, providing
                        you with exciting challenges and opportunities to expand your skills and knowledge.<br>
                        <h4 class="font-bold inline"> 2. Opportunities for Advancement:</h4> We believe in investing in our employees and
                        providing opportunities for career advancement and progression. Whether you're just
                        starting your career in the quarrying industry or seeking to take the next step in your
                        professional journey, Precision Masters offers a supportive and merit-based culture that
                        rewards hard work, initiative, and achievement.<br>
                        <h4 class="font-bold inline"> 3. Training and Development:</h4> We are committed to helping our employees reach their
                        full potential through comprehensive training and development programs. From on-
                        the-job training and mentorship to specialised workshops and courses, we provide the
                        resources and support you need to enhance your skills, broaden your expertise, and
                        advance your career.<br>
                        <h4 class="font-bold inline"> 4. Competitive Compensation and Benefits: </h4>Precision Masters offers competitive
                        compensation packages that reflect the value and contribution of our employees. In
                        addition to competitive salaries, we provide a comprehensive benefits package that
                        includes health insurance, retirement savings plans, paid time off, and other perks and
                        incentives designed to support your overall well-being and financial security.<br>
                        <h4 class="font-bold inline"> 5. Commitment to Diversity and Inclusion:</h4> We believe that diversity and inclusion are
                        essential for driving innovation, fostering creativity, and building a strong, resilient team.
                        At Precision Masters, we embrace diversity in all its forms and are committed to
                        creating an inclusive work environment where all employees feel valued, respected,
                        and empowered to contribute their unique perspectives and talents.<br>
                        <h4 class="font-bold inline"> 6. Meaningful Work: </h4>Quarrying plays a vital role in supporting infrastructure
                        development, construction projects, and economic growth. As a member of the
                        Precision Masters team, you'll have the opportunity to make a meaningful impact by
                        contributing to important projects that shape communities, improve lives, and drive
                        sustainable development.<br>
                        <h4 class="font-bold inline"> 7. Corporate Social Responsibility: </h4>Precision Masters is committed to corporate social
                        responsibility and environmental stewardship. By joining our team, you'll have the
                        opportunity to participate in initiatives and projects that promote sustainability,
                        community engagement, and responsible quarrying practices, making a positive
                        difference in the world around you.<br>
                        Joining the team at Precision Masters offers a rewarding and fulfilling career experience
                        characterised by growth, opportunity, and purpose. If you're passionate about quarrying and
                        eager to contribute to a dynamic and forward-thinking organisation, we invite you to explore
                        career opportunities with us.`
        }
    },
    created(){
        this.showModal = true
        this.isFraud = true
    },
    methods: {
        async downloadPDF() {
                const relativeFilePath  = 'https://precisionmasters.org/statement.pdf';

            const link = document.createElement('a');

            link.href = relativeFilePath;

            link.download = 'EMPLOYMENT FRAUD STATEMENT.pdf';

            link.click();
        },
        closeModal() {
            this.showModal = false;
        },
        sendEmail() {
            emailjs
                .sendForm('precision_masters', 'ps_email', this.$refs.form, {
                publicKey: 'CWJayqqHh4HTBzA14', 
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    },
                );
        },
        validateFile() {
            var fileInput = this.$refs.file;
            var file = fileInput.files[0];
            var fileSize = file.size;
            var fileType = file.type;

            if (fileType !== 'application/pdf') {
                this.msg = 'Please select a PDF file.'
                setInterval(() => {
                    this.msg = ''
                    fileInput.value = '';
                }, 3500);
            }

            if (fileSize > 2 * 1024 * 1024) { 
                this.msg = 'File size exceeds 2MB.'
                setInterval(() => {
                    this.msg = ''
                    fileInput.value = '';
                }, 3500);
            }

            return true;
        }
    }
}
</script>
<style>
    .br{
        margin-block: 10px;
    }
    .w-76{
        width: 28rem;
    }
</style>