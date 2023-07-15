import { client } from "@/lib/contentful/client";
import Portfolio from "./portfolio";

async function fetchContentfulData() {
  const promises = [
    client.getEntries({ content_type: "education" }),
    client.getEntries({ content_type: "banner" }),
    client.getEntries({ content_type: "experience" }),
    client.getEntries({ content_type: "features" }),
    client.getEntries({ content_type: "profile" }),
    client.getEntries({ content_type: "projects" }),
    client.getEntries({ content_type: "skills" }),
  ];
  try {
    const [
      educationEntries,
      bannerEntries,
      experienceEntries,
      featuresEntries,
      profileEntries,
      projectsEntries,
      skillsEnteries,
    ] = await Promise.all(promises);
    const responseData = {
      banner: bannerEntries,
      features: featuresEntries,
      profiles: profileEntries,
      projects: projectsEntries,
      education: educationEntries,
      skills: skillsEnteries,
      experience: experienceEntries,
    };

    return responseData;
  } catch (error) {
    console.error("Error fetching entries:", error);
  }
}

export default async function GetContentful() {
  const responseData = await fetchContentfulData();
  // const {
  //   banner,
  //   experience,
  //   skills,
  //   education,
  //   features,
  //   profiles,
  //   projects,
  // } = await fetchContentfulData();

  return <Portfolio data={responseData} />;
}
