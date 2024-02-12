import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import cache from "../../Assets/Projects/cache.png";
import Gdrive from "../../Assets/Projects/gdrive.png";
import whack from "../../Assets/Projects/whack.png"
//import 3 from "../Assets/Projects/2.jpp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
              <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sentiment analysis of Users on social media platforms (Capstone Project)"
              description={`Pytesarct, Hugging Face, Twitter API, TikTok API, Scrapy, BeautifulSoup, OpenCV, Apache Hadoop, Apache Spark, Apache Beam, GCP, TensorFlow\n: Conducted sentiment analysis on multiple social media platforms, utilizing data scraping techniques to compile a comprehensive dataset of text, images, audio, and video content.\n
              Integrated them into NetMapper, enriching the analysis depth by extracting semantic and social networks from text data, while also enhancing network analysis, visualization, and forecasting capabilities within ORA.\n
              Developed custom multimodal machine learning models for nuanced sentiment analysis, later transitioning to predefined models for efficiency and accuracy in emotion analysis.\n
              Successfully classified user sentiments into positive, negative, and neutral categories, contributing to data-informed decision-making for businesses and organization.\n
              Enhanced sentiment analysis accuracy by integrating text, images, audio, and video data, offering a holistic view of user sentiments in the dynamic online environment.`}
              link="https://kilthub.cmu.edu/articles/thesis/Social-Cyber_Maneuvers_for_Analyzing_Online_Influence_Operations/22825112"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="UDP Data Reception Server"
              description=" Python, PyCryptodome, socket, Crypto, hashlib, struct, zlib, UDP : Implemented RSA authentication and digital signature verification in the UDP data reception server, reducing the risk
              of unauthorized access and data tampering, resulting in a 95% reduction in security incidents
              Streamlined the server's data reception process, enhancing its efficiency and reliability, leading to a 50% reduction in
              data packet loss and a 30% increase in overall data throughput
              "
             link="https://github.com/devashish10397/Python--UDP-Server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Scalable Web Service Optimization "
              description="JAVA, RMI, AFS, Linux : Scaled a simulated multi-tier(n-tier) web storefront within a cloud environment and successfully identified and
              mitigated bottlenecks, optimizing server allocation for enhanced system responsiveness and cost efficiency.
              Implemented dynamic auto-scaling to start and stop VMs based on client arrival rates, resulting in a 40% throughput
              improvement during peak loads and optimized cost efficiency in response to varying workloads
              "
             link="https://www.coursehero.com/file/158272966/15440-p3-handoutpdf/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Multi-threaded Web Proxy"
              description="C, POSIX, libcurl, Pthreads, OpenSSL, mutexlocks, semaphore : Developed a Multi-threaded Web Proxy, adeptly handling client requests, implementing a Least Recently Used (LRU) content eviction policy for efficient caching of web objects, and effectively routing requests to servers.
              Simultaneously managed server responses to clients via multithreading, ensuring swift and concurrent delivery of web content for improved user experience.
              "
              link="https://www.cs.cmu.edu/afs/cs/academic/class/15213-s16/www/recitations/recitation13-proxylab.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Facial Emotion Detection"
              description="Developed a Facial Emotion Detection system with Python, numpy, and CNN techniques, achieving a remarkable accuracy rate of approximately 88%. The system, hosted on Hugging Face,
               positively impacted user experience by providing efficient real-time emotion analysis for thousands of users"
              link="https://docs.google.com/document/d/1xhcbigu4FWG7V5vCwi5-J2G1kl3Zo25Zuiwb7_H7IhE/edit#heading=h.l3qhchysl660"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cache}
              isBlog={false}
              title="Cache Simulator"
              description=": Simulated hardware L1 cache memory in C with a write-back, write-allocate policy that adopts LRU content eviction policy.
              - Optimized finding the transpose of 32x32 and 1024x1024 using the blocking method with my cache implementation while minimizing the cache miss rate
               of of password data to run-block 1st and 2nd order SQL injection attack."
              link="https://www.cs.cmu.edu/afs/cs/academic/class/15213-s15/www/recitations/recitation-7.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gdrive}
              isBlog={false}
              title="GDriveExplore"
              description=" OAuth2 authentication, the google-api-python-client library, Python, GCP, etc: Engineered an all-in-one Python script that seamlessly interacts with the Google Drive API, empowering users to effortlessly list files, download specific files by name, and manage permissions directly from the command line."
              link="https://github.com/devashish10397/GoogleDriveAPIDownloader"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whack}
              isBlog={false}
              title="Multi-Threaded Whack-a-Mole Game"
              description="Java, Java Swing, Java multi-threading :Crafted an immersive multi-threaded Whack-a-Mole game using Java Swing, demonstrating seamless concurrency
              management and interactive user engagement."
              link="https://github.com/devashish10397/Amazon-Review-Clustering"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Istio Microservices Deployment "
              description="Configured dynamic routing for multiple microservice versions for a weather app using Istio within a 
              Kubernetes environment. Orchestrated dynamic routing for multiple microservice versions within a Kubernetes environment 
              using Istio. Configured and managed the deployment of a weather app, enhancing service reliability and flexibility. 
              Implemented a blue-green release strategy, distributing traffic between two identical environments, allowing for 
              seamless updates with minimal downtime.
              "
              link="https://github.com/devashish10397/istio_weather"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
