interface Project {
    admin: string;
    projects: Array<{
      gitSrc: string;
      liveUrl: string;
      bgSrc: string;
      prjTitle:string;
    }>;
  }
export default Project  