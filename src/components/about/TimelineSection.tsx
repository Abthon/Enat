import { Timeline } from "../ui/timeline";
import Image from "next/image";

export default function TimelineSection() {
  const timelineData = [
    {
      title: "Newborn",
      description: "Receive Remittance through the bank in Ethiopia. Partnering more than 13 world class agents",
      content: (
        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-amber-200 to-amber-400">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-amber-700 text-center">
				<Image src="/images/timeline1.jpg" alt="timeline 1" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Childhood",
      description: "Receive Remittance through the bank in Ethiopia. Supporting families and communities across Ethiopia",
      content: (
        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-green-400">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-green-700 text-center">
				<Image src="/images/timeline2.jpg" alt="timeline 2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Childhood",
      description: "Receive Remittance through the bank in Ethiopia. Supporting families and communities across Ethiopia",
      content: (
        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-green-400">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-green-700 text-center">
				<Image src="/images/timeline2.jpg" alt="timeline 2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Childhood",
      description: "Receive Remittance through the bank in Ethiopia. Supporting families and communities across Ethiopia",
      content: (
        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-green-200 to-green-400">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-green-700 text-center">
				<Image src="/images/timeline2.jpg" alt="timeline 2" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    //{
    //  title: "Education",
    //  description: "Supporting educational initiatives and scholarships. Empowering the next generation through education",
    //  content: (
    //    <div className="relative rounded-xl overflow-hidden">
    //      <div className="aspect-[4/3] bg-gradient-to-br from-blue-200 to-blue-400">
    //        <div className="w-full h-full flex items-center justify-center">
    //          <div className="text-blue-700 text-center">
    //            <div className="text-4xl mb-2">🎓</div>
    //            <p className="text-xs font-medium">Educational Support</p>
    //          </div>
    //        </div>
    //      </div>
    //    </div>
    //  ),
    //},
    //{
    //  title: "Empowerment",
    //  description: "Women's economic empowerment and financial inclusion. Creating opportunities for women entrepreneurs",
    //  content: (
    //    <div className="relative rounded-xl overflow-hidden">
    //      <div className="aspect-[4/3] bg-gradient-to-br from-purple-200 to-purple-400">
    //        <div className="w-full h-full flex items-center justify-center">
    //          <div className="text-purple-700 text-center">
    //            <div className="text-4xl mb-2">💪</div>
    //            <p className="text-xs font-medium">Women Empowerment</p>
    //          </div>
    //        </div>
    //      </div>
    //    </div>
    //  ),
    //},
  ];

  return (
    <section className="bg-white overflow-hidden flex justify-center items-center">
      <div>
        <Timeline data={timelineData}/>
      </div>
    </section>
  );
}
