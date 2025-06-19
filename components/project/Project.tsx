import ScrollFloat from '@/components/ScrollFloat';

const ProjectPage = () => {
  return (
    <div>
        <div className="flex justify-center">
                <ScrollFloat
                  animationDuration={1}
                  ease="power3.out"
                  scrollStart="top bottom"
                  scrollEnd="bottom center"
                  textClassName="text-3xl text-center sm:text-4xl md:text-5xl font-bold text-black"
                >
                  Skills
                </ScrollFloat>
              </div>
    </div>
  );
}

export default ProjectPage;