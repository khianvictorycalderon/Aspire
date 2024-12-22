// DO NOT EDIT, DISTRIBUTE NOR SCAN THIS CODE, IT IS PUNISHABLE BY LAW

var f1 = '<span class="font1">';
var f2 = '<span class="font2">';
var f3 = '<span class="font3">';
var f4 = '<span class="font4">';
var fx = '</span>';
var br = "<br>";
var manual = false;

function random(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function submit() {
    const adviceBox = document.getElementById('advice');
    const advice = adviceBox.checked;

    var name = (document.getElementById("name").value).replace(/[<>&"']/g, "");
    var type = document.querySelector('input[name="type"]:checked');
    var skills_checkboxes = document.querySelectorAll('input[name="skills"][type="checkbox"]');
    var skills_list = [];

    skills_checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            skills_list.push(checkbox.id);
        }
    });
    console.log(skills_list);

    if (!type && skills_list.length == 0) {
        alert("Please select recommendation type and choose at least one skill");
    } else if (!type) {
        alert("Please select recommendation type");
    } else if (skills_list.length == 0) {
        alert("Please choose at least one skill");
    }

    if (type && skills_list.length !== 0) {
        var rec = document.getElementById("recommendation-area");
        document.getElementById("form").style.display = "none";
        rec.style.display = "block";
        rec.innerHTML = "";
        rec.scrollIntoView({ behavior: "smooth" });
        rec.style.animation = "showform 1s ease-out";

        rec.innerHTML += f2 + "Recommendation: " + fx + br;

        if (name.trim() !== "") {
            let greet = random(1,5);
            switch(greet) {
                case 1:
                    rec.innerHTML += f3 + "Hello " + fx;
                    break;
                case 2:
                    rec.innerHTML += f3 + "Hi " + fx;
                    break;
                case 3:
                    rec.innerHTML += f3 + "Nice to meet you " + fx;
                    break;
                case 4:
                    rec.innerHTML += f3 + "Greetings " + fx;
                    break;
                case 5:
                    rec.innerHTML += f3 + "Good day " + fx;
                    break;
            }
            rec.innerHTML += f3 + name + fx;
            let addons = random(0,3);
            switch (addons) {
                case 1:
                    rec.innerHTML += f3 + ", what a wonderful name. " + fx;
                    break;
                case 2:
                    rec.innerHTML += f3 + ", what a beautiful name. " + fx;
                    break;
                case 3:
                    rec.innerHTML += f3 + ", such a good name. " + fx;
                    break;
                default:
                    rec.innerHTML += f3 + ". " + fx;
                    break;
            }
        }

        // analysis
        if (skills_list.length == 31) {
            rec.innerHTML += f3 + "Congratulations!, you have tons of skills and abilities. " + fx;
        } else if (skills_list.length > 20) {
            rec.innerHTML += f3 + "Congratulations!, you have so many skills. " + fx;
        } else if (skills_list.length > 12) {
            rec.innerHTML += f3 + "Congrats!, you have many skills. " + fx;
        } else if (skills_list.length > 6) {
            rec.innerHTML += f3 + "Wow!, you have many skills. " + fx;
        } else {
            let intro = random(1, 3);
            switch (intro) {
                case 1:
                    rec.innerHTML += f3 + "Your skills are good. " + fx;
                    break;
                case 2:
                    rec.innerHTML += f3 + "Your skills will be very helpful. " + fx;
                    break;
                case 3:
                    rec.innerHTML += f3 + "Your skills provides basic foundation. " + fx;
                    break;
            }
        }
        switch (type.id) {
            case "career":
                rec.innerHTML += f3 + "You chose career recommendation. " + fx;
                if (manual) { // combinations for future code

                } 
                if (!manual) {
                    if (skills_list.includes("verbal-communication") || skills_list.includes("written-communication")) {
                        rec.innerHTML += f3 + "In a professional context, you can excel as a public speaker, adeptly conveying ideas; a skilled content writer, crafting compelling narratives; a journalist, uncovering and reporting stories; and a proficient corporate trainer, imparting knowledge effectively. " + fx;
                    }
                    if (skills_list.includes("programming") || skills_list.includes("web-development") || skills_list.includes("data-analysis") || skills_list.includes("graphic-design")) {
                        rec.innerHTML += f3 + "You have the capacity to take on roles such as a Software Developer, Front-End Developer, Back-End Developer, Data Analyst, or UX/UI Designer, showcasing a versatile skill set to tackle various technical endeavors. " + fx;
                    }
                    if (skills_list.includes("logical-reasoning") || skills_list.includes("critical-thinking")) {
                        rec.innerHTML += f3 + "You have the potential to excel as an Analyst, Consultant, and Research Scientist, bringing a diverse range of skills to solve complex problems and contribute valuable insights. " + fx;
                    }
                    if (skills_list.includes("creative-writing") || skills_list.includes("design")) {
                        rec.innerHTML += f3 + "You can thrive as a graphic designer, blending visual artistry with digital expertise; a creative writer, weaving compelling narratives; an art director, shaping creative visions; and a copywriter, crafting persuasive messages—all in a professional capacity. " + fx;
                    }
                    if (skills_list.includes("team-management") || skills_list.includes("decision-making")) {
                        rec.innerHTML += f3 + "You have the ability to assume responsibilities as a Manager, Project Manager, Team Leader, and Operations Manager, showcasing strong leadership and organizational skills to drive successful outcomes. " + fx;
                    }
                    if (skills_list.includes("time-management") || skills_list.includes("project-management")) {
                        rec.innerHTML += f3 + "You possess the versatility to take on roles such as a Project Manager, Event Planner, Executive Assistant, and Operations Coordinator, demonstrating adept organizational and multitasking abilities to ensure seamless execution. " + fx;
                    }
                    if (skills_list.includes("relationship-building") || skills_list.includes("collaboration")) {
                        rec.innerHTML += f3 + "You have the capacity to excel as a Sales Representative, Human Resources Manager, Customer Service Representative, and Social Worker, displaying strong interpersonal skills and empathy to meet diverse needs effectively. " + fx;
                    }
                    if (skills_list.includes("sales-techniques") || skills_list.includes("marketing-strategy")) {
                        rec.innerHTML += f3 + "You can fulfill roles as a Marketing Manager, Sales Manager, Digital Marketing Specialist, and Advertising Executive, leveraging strategic insights and creative expertise to drive successful campaigns and business growth. " + fx;
                    }
                    if (skills_list.includes("multilingual-abilities")) {
                        rec.innerHTML += f3 + "You can assume roles as a Translator, Interpreter, and Language Teacher, utilizing linguistic skills and cultural understanding to facilitate effective communication and learning experiences. " + fx;
                    }
                    if (skills_list.includes("customer-relationship-management")) {
                        rec.innerHTML += f3 + "You can take on positions such as a Customer Service Representative, Call Center Agent, and Client Relations Manager, effectively addressing inquiries and fostering positive relationships with clients. " + fx;
                    }
                    if (skills_list.includes("troubleshooting")) {
                        rec.innerHTML += f3 + "You can hold roles as an IT Support Specialist, Help Desk Technician, and Technical Writer, providing comprehensive technical assistance and documentation to ensure smooth operations and effective communication. " + fx;
                    }
                    if (skills_list.includes("budgeting") || skills_list.includes("financial-analysis")) {
                        rec.innerHTML += f3 + "You can function as a Financial Analyst, Accountant, and Investment Analyst, leveraging analytical skills and financial expertise to provide valuable insights and strategic guidance. " + fx;
                    }
                    if (skills_list.includes("medical-knowledge")) {
                        rec.innerHTML += f3 + "You can serve as a Nurse, Doctor, and Medical Laboratory Technician, contributing to patient care, diagnostics, and healthcare delivery with a range of medical skills and expertise. " + fx;
                    }
                    if (skills_list.includes("curriculum-development")) {
                        rec.innerHTML += f3 + "You can assume roles as a Teacher, Corporate Trainer, and Education Administrator, fostering learning environments, delivering effective training, and managing educational institutions with dedication and expertise. " + fx;
                    }
                    if (skills_list.includes("mechanical-engineering")) {
                        rec.innerHTML += f3 + "You can excel in positions such as a Mechanical Engineer, Electrical Engineer, Civil Engineer, and Software Engineer, applying technical knowledge and problem-solving skills to contribute to diverse engineering projects and innovations. " + fx;
                    }
                    if (skills_list.includes("experiment-design")) {
                        rec.innerHTML += f3 + "You can thrive as a Data Analyst, Market Research Analyst, and Scientist, utilizing analytical and research skills to uncover insights, drive informed decisions, and contribute to advancements in various fields. " + fx;
                    }
                    if (skills_list.includes("athletic-abilities")) {
                        rec.innerHTML += f3 + "You can excel as an Athlete, Fitness Instructor, Yoga Teacher, and Coach, promoting physical well-being, providing expert guidance, and inspiring individuals to achieve their fitness and performance goals. " + fx;
                    }
                    if (skills_list.includes("cooking-techniques")) {
                        rec.innerHTML += f3 + "You can succeed as a Chef, Baker, Caterer, and Food Stylist, showcasing culinary expertise, creative presentation, and exceptional taste to deliver memorable dining experiences. " + fx;
                    }
                    if (skills_list.includes("carpentry")) {
                        rec.innerHTML += f3 + "You can thrive as a Carpenter, Plumber, Electrician, and HVAC Technician, utilizing specialized skills to contribute to construction, infrastructure, and maintenance projects with precision and reliability. " + fx;
                    }
                    if (skills_list.includes("sustainable-practices")) {
                        rec.innerHTML += f3 + "You can excel as an Environmental Scientist, Sustainability Consultant, and Renewable Energy Specialist, driving initiatives to understand, promote, and implement environmentally conscious practices and solutions. " + fx;
                    }
                }
                break;
            case "business":
                rec.innerHTML += f3 + "You chose business recommendation. " + fx;
                if (manual) { // combinations for future code

                } 
                if (!manual) {
                    if (skills_list.includes("verbal-communication") || skills_list.includes("written-communication")) {
                        rec.innerHTML += f3 + "You may establish a business specializing in public speaking training workshops, helping individuals enhance their communication and presentation skills. You may create a business offering communication coaching services tailored for professionals seeking to improve their interpersonal and public speaking abilities. " + fx;
                    }
                    if (skills_list.includes("programming") || skills_list.includes("web-development") || skills_list.includes("data-analysis") || skills_list.includes("graphic-design")) {
                        rec.innerHTML += f3 + "You may build a web development agency focused on creating innovative and customized digital solutions for clients across various industries. You have the opportunity to establish a business in the form of a data analytics consultancy, providing insights and strategic guidance to companies looking to leverage data for informed decision-making and growth. " + fx;
                    }
                    if (skills_list.includes("logical-reasoning") || skills_list.includes("critical-thinking")) {
                        rec.innerHTML += f3 + "You have the potential to establish a management consulting firm, offering expert advice and strategies to businesses aiming to optimize their operations and achieve sustainable growth. You may create a business centered around problem-solving workshops and seminars, providing individuals and organizations with practical tools and techniques to effectively address challenges and foster innovative solutions. " + fx;
                    }
                    if (skills_list.includes("creative-writing") || skills_list.includes("design")) {
                        rec.innerHTML += f3 + "You may build a creative agency that specializes in offering a wide range of design and content services, catering to businesses looking to enhance their brand presence through visually appealing designs and engaging content. You can establish a business focused on writing and content creation freelancing, connecting talented writers with clients seeking high-quality written materials for various purposes, from marketing copy to informative articles. " + fx;
                    }
                    if (skills_list.includes("team-management") || skills_list.includes("decision-making")) {
                        rec.innerHTML += f3 + "You may establish a business dedicated to providing leadership development programs, guiding individuals and organizations through comprehensive training and coaching to cultivate effective leadership skills and strategies. You have the opportunity to build a business centered around project management consulting, offering expertise and methodologies to help companies successfully plan, execute, and deliver projects on time and within budget. " + fx;
                    }
                    if (skills_list.includes("time-management") || skills_list.includes("project-management")) {
                        rec.innerHTML += f3 + "You may build a business specializing in personal and professional organization services, assisting clients in streamlining their lives and workspaces for improved efficiency and productivity. You have the opportunity to establish a business centered around event planning and coordination, providing seamless and memorable experiences for individuals and organizations by meticulously arranging and executing a variety of events. " + fx;
                    }
                    if (skills_list.includes("relationship-building") || skills_list.includes("collaboration")) {
                        rec.innerHTML += f3 + "You may establish a business focused on sales training and consulting, equipping sales teams with effective techniques and strategies to enhance their performance and drive revenue growth. You have the opportunity to build a business specializing in human resources consulting, providing companies with expert guidance and solutions to optimize their HR practices, talent management, and employee engagement for sustained organizational success. " + fx;
                    }
                    if (skills_list.includes("sales-techniques") || skills_list.includes("marketing-strategy")) {
                        rec.innerHTML += f3 + "You may build a marketing agency that offers comprehensive strategies and creative campaigns, helping businesses maximize their online and offline presence while reaching their target audiences effectively. You have the opportunity to establish a business centered around sales training programs, providing tailored and results-driven training to sales teams, empowering them to close deals more effectively and contribute to company growth. " + fx;
                    }
                    if (skills_list.includes("multilingual-abilities")) {
                        rec.innerHTML += f3 + "You may establish a business specializing in translation and interpretation services, facilitating effective communication across languages and cultures for individuals and businesses. You have the opportunity to build a business centered around language learning platforms, offering interactive and engaging resources that enable people to acquire new languages and broaden their global communication skills. " + fx;
                    }
                    if (skills_list.includes("customer-relationship-management")) {
                        rec.innerHTML += f3 + "You may establish a business focusing on customer service training for businesses, equipping their teams with the skills and knowledge to deliver exceptional customer support and enhance overall satisfaction. You have the opportunity to build a business centered around customer experience consulting, providing companies with insights and strategies to optimize their customer journey, resulting in improved loyalty, retention, and brand reputation. " + fx;
                    }
                    if (skills_list.includes("troubleshooting")) {
                        rec.innerHTML += f3 + "You may build a business providing IT support services tailored for businesses, ensuring their technical infrastructure runs smoothly and efficiently, thus enabling them to focus on their core operations. You have the opportunity to establish a business centered around technical writing and documentation services, helping companies create clear and comprehensive documentation for their products, processes, and technologies, ultimately enhancing user understanding and satisfaction. " + fx;
                    }
                    if (skills_list.includes("budgeting") || skills_list.includes("financial-analysis")) {
                        rec.innerHTML += f3 + "You may establish a business specializing in financial planning and advisory services, offering clients expert guidance and strategies to achieve their financial goals and secure their future. You have the opportunity to build a business centered around accounting and bookkeeping services, providing meticulous financial management support to businesses, ensuring accurate record-keeping and compliance with financial regulations. " + fx;
                    }
                    if (skills_list.includes("medical-knowledge")) {
                        rec.innerHTML += f3 + "You may establish a business focused on health and wellness coaching, helping individuals achieve their physical and mental well-being goals through personalized guidance and support. You have the opportunity to build a business centered around medical content creation, delivering accurate and informative content that educates and empowers people about various health topics, bridging the gap between medical knowledge and the general public. " + fx;
                    }
                    if (skills_list.includes("curriculum-development")) {
                        rec.innerHTML += f3 + "You may build an educational institution offering a diverse range of online courses and learning opportunities, empowering students to acquire new skills and knowledge in a flexible and accessible format. You have the opportunity to establish a business focused on professional training programs, providing specialized training and skill development to individuals seeking to excel in their careers and stay competitive in their respective industries. " + fx;
                    }
                    if (skills_list.includes("mechanical-engineering")) {
                        rec.innerHTML += f3 + "You may establish a business specializing in engineering consulting services, offering expert advice and solutions to businesses and projects across various engineering disciplines. You have the opportunity to build a business centered around design and prototyping services, providing clients with innovative design solutions and rapid prototyping capabilities to bring their ideas and products to life efficiently and effectively. " + fx;
                    }
                    if (skills_list.includes("experiment-design")) {
                        rec.innerHTML += f3 + "You may establish a business as a market research firm, delivering comprehensive insights and analysis to businesses, enabling them to make informed decisions and strategies based on market trends and consumer behavior. You have the opportunity to build a business centered around data analysis and insights consulting, assisting companies in unlocking the value of their data through advanced analytics, helping them gain a competitive edge and drive growth. " + fx;
                    }
                    if (skills_list.includes("athletic-abilities")) {
                        rec.innerHTML += f3 + "You may establish a business specializing in fitness training and coaching, offering personalized guidance and workout plans to individuals striving for improved health and fitness. You have the opportunity to build a business centered around an athletic equipment store, providing a wide range of high-quality fitness and sports equipment to cater to the needs of athletes and fitness enthusiasts, supporting their active lifestyles. " + fx;
                    }
                    if (skills_list.includes("cooking-techniques")) {
                        rec.innerHTML += f3 + "You may establish a business specializing in catering and event food services, delivering exceptional culinary experiences and catering solutions for various events and occasions. You have the opportunity to build a business centered around cooking classes and workshops, providing individuals with the opportunity to learn and master culinary skills, enhancing their cooking abilities and fostering a deeper appreciation for food. " + fx;
                    }
                    if (skills_list.includes("carpentry")) {
                        rec.innerHTML += f3 + "You may establish a business focusing on home improvement and repair services, offering a range of skilled solutions to enhance and maintain residential properties. You have the opportunity to build a business centered around a carpentry and woodworking business, crafting custom-made and innovative wood-based products, as well as providing skilled carpentry services to cater to various construction and design needs. " + fx;
                    }
                    if (skills_list.includes("sustainable-practices")) {
                        rec.innerHTML += f3 + "You may establish a business specializing in sustainability consultancy, guiding companies towards environmentally conscious practices and helping them integrate sustainable strategies into their operations. You have the opportunity to build a business centered around renewable energy solutions, providing innovative and eco-friendly energy options to clients, contributing to a greener future and reduced carbon footprint. " + fx;
                    }
                }
                break;
        }

        //------------------
        // advice
        if(advice) {
            let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
            rec.innerHTML += br + br + br + f3 + '<div class="center-all"><b>' + quotes[randomQuoteIndex] + '</b></div>' + fx;
        }

        //------------------
        rec.innerHTML += br + br + f3 + "This is just a recommendation and it is entirely up to you if you would follow it." + fx + br;
        rec.innerHTML += '<div class="center-all"><button onclick="location.reload();" class="font2" id="generate-again">Generate Again</button></div>';
    }
}