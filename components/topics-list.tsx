import { useEffect } from "react";


export const TopicsList: React.FC<{}> = ({ }) => {


	let courseDetails = [
		{ "course": "Bullying ", "category": "Around Us/Social World" }, { "course": "Animal welfare ", "category": "Around Us/Social World" }, { "course": "Homelessness ", "category": "Around Us/Social World" }, { "course": "Sexual Harassment ", "category": "Around Us/Social World" }, { "course": "LGBTQ+", "category": "Around Us/Social World" }, { "course": "Globalisation", "category": "Around Us/Social World" }, { "course": "Peer Pressure", "category": "Around Us/Social World" }, { "course": "Gardening and Nurturing Plants", "category": "Around Us/Social World" }, { "course": "Agriculture ", "category": "Career Options" }, { "course": "Practical STEM education ", "category": "Career Options" }, { "course": "Humanity ", "category": "Career Options" }, { "course": "Competitive Examinations ", "category": "Career Options" }, { "course": "CPR and First Aid ", "category": "Emergancy Response" }, { "course": "Fire safety", "category": "Emergancy Response" }, { "course": "Mental illness  ", "category": "Health" }, { "course": "Autism ", "category": "Health" }, { "course": "Alzimers ", "category": "Health" }, { "course": "Down syndrome ", "category": "Health" }, { "course": "Epilepsy", "category": "Health" }, { "course": "PM depression ", "category": "Health" }, { "course": "Hearing aid ", "category": "Health" }, { "course": "Health and Nutrition", "category": "Health" }, { "course": "Dental Hygiene ", "category": "Personality Development" }, { "course": "Mindfulness ", "category": "Personality Development" }, { "course": "Internships in Student Life", "category": "Personality Development" }, { "course": "Online Sources to Knowledge", "category": "Personality Development" }, { "course": "Self-sufficiency", "category": "Personality Development" }, { "course": "Travel", "category": "Personality Development" }, { "course": "Relaxation Techniques", "category": "Personality Development" }, { "course": "Self-care/Self-love", "category": "Personality Development" }, { "course": "Empathy", "category": "Personality Development" }, { "course": "Healing", "category": "Personality Development" }, { "course": "Staying active", "category": "Personality Development" }, { "course": "Exercises for the brain", "category": "Personality Development" }, { "course": "Artificial Intelligence ", "category": "Science and Technology" }, { "course": "Technologies ", "category": "Science and Technology" }, { "course": "Robotics ", "category": "Science and Technology" }, { "course": "NeuroScience and Technology", "category": "Science and Technology" }, { "course": "Psychology in everyday life", "category": "Science and Technology" }, { "course": "Self defense ", "category": "Skill Development" }, { "course": "Personal financing / Money management ", "category": "Skill Development" }, { "course": "Effective Communication", "category": "Skill Development" }, { "course": "Soft Skills", "category": "Skill Development" }, { "course": "Skill Development", "category": "Skill Development" }, { "course": "Habit Building", "category": "Skill Development" }, { "course": "Team Spirit", "category": "Skill Development" }, { "course": "Marketing skills ", "category": "Skill Development" }, { "course": "Digital Media", "category": "Skill Development" }, { "course": "Web Design and Development", "category": "Skill Development" }, { "course": "Creating a Digital Presence ", "category": "Skill Development" }, { "course": "Portfolio Building", "category": "Skill Development" }, { "course": "Recycling/Littering ", "category": "Social Awareness" }, { "course": "Energy conservation ", "category": "Social Awareness" }, { "course": "Teens and Internet safety ", "category": "Social Awareness" }, { "course": "Substance Abuse Prevention and Social Awareness ", "category": "Social Awareness" }, { "course": "Emergency Response ", "category": "Social Awareness" }, { "course": "Burnout", "category": "Social Awareness" }, { "course": "Yoga and Meditation", "category": "" }, { "course": "Personal Hygiene", "category": "" }
	]

	let courseCategories = [...new Set(courseDetails.map(item => item.category))].filter(category => (category != '')); // [ 'A', 'B']

	useEffect(() => {
		var verticalTabs = document.querySelector("#verticleTabs");

		var verticalTabsMenuElems = verticalTabs.querySelectorAll("#tabs>div>a");
		var verticalTabsPanelElems = verticalTabs.querySelectorAll("#panels>div");

		verticalTabsMenuElems.forEach((element, index) => {
			element.addEventListener("click", (event) => {
				event.preventDefault();
				verticalTabsMenuElems.forEach(menuElem => {
					menuElem.classList.remove('bg-slate-200', 'text-teal-700')
				})
				verticalTabsPanelElems.forEach((panelElem) => {
					panelElem.classList.add('hidden');
				})

				verticalTabsPanelElems[index].classList.remove('hidden');
				element.classList.add('bg-slate-200', 'text-teal-700');
			})

		});
		
		verticalTabsMenuElems[0].dispatchEvent(new Event("click"))

	});


	return (
		<>
			<div id="verticleTabs" className="grid grid-cols-8 auto-rows-min min-h-[430px]">
				<div id="tabs" className="nav grid grid-cols-1 auto-rows-min col-span-2 p-0 m-0 bg-slate-100">
					{courseCategories.map((category, index) => (
							<div key={index} className="menu-item p-0 border-b last:border-b-0 text-center lg:text-right border-solid border-b-gray-300"><a className="block hover:text-teal-700 py-2 sm:px-10 cursor-pointer" href="#">{category}</a></div>
					))}

				</div>
				<div id="panels" className="col-span-6">
					{courseCategories.map((category, index) => (
						<div key={index} className="px-5 block grid grid-flow-row-dense auto-rows-min grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-full w-full hidden">
							{courseDetails.map((courseDetail, courseIndex) => {
								if (courseDetail.category == category) {
									return (
										<div key={courseIndex} className="block p-6 overflow-hidden bg-teal-700 text-white border-b border-slate-100 hover:bg-teal-600 cursor-pointer text-center middle">
											{courseDetail.course}
										</div>
									)
								}
							})}
						</div>
					))}
				</div>

			</div>
		</>
	)

}