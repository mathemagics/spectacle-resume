import React from "react";
import { Fill, Heading, Image, Layout, Link, Text} from "spectacle";

const images = {
  github: require("../../assets/github-icon.png"),
  linkedin: require("../../assets/linkedin-icon.png")
};


import preloader from "spectacle/lib/utils/preloader";
preloader(images);

const BusinessCardSlide = () => {
  return (
    <div>
      <Heading textAlign="left" size={3} caps lineHeight={1} textColor="#E0DFD5" textFont="Gill Sans">
        Paul Bodnar
      </Heading>
      <Heading size={6} caps lineHeight={1} textColor="#F09D51" textAlign="left" textFont="Gill Sans">
        Web Developer
      </Heading>
      <Layout>
        <Fill>
        <Text textColor="white" textAlign="left" lineHeight={1.5}>higgsbison@gmail.com</Text>
        <Text textColor="white" textAlign="left">778.233.3634</Text>
        </Fill>
      </Layout>
      <Layout>
        <Link textAlign="left" href="https://github.com/mathemagics">
          <Image width="40px" margin="10px 10px"src={images.github}/>
        </Link>
        <Link textAlign="left" href="https://ca.linkedin.com/in/paul-bodnar">
          <Image width="46px" margin="7px 10px" src={images.linkedin}/>
        </Link>
      </Layout>
    </div>
  );
};

export {BusinessCardSlide};
