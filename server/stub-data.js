const data = {
  events: [
    {
      message:
        "Critical software bug: A critical bug is discovered in a key functionality of the healthcare product, causing data loss and impacting the user experience. This requires intensive debugging and hotfixes, delaying other planned features and shaking the team's confidence in the product's stability.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "Unexpected hardware failure: The team's main development server experiences a sudden hardware failure, leading to significant downtime and loss of work. This setback requires the developers to quickly set up a replacement server, resulting in hours of lost productivity and delays in feature development.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "Integration difficulties: When integrating the healthcare product with third-party APIs or systems, the team encounters unexpected compatibility issues. This requires additional time for troubleshooting and collaboration with the external vendors to find resolutions, resulting in delayed feature releases.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "Scope creep: The project stakeholders request last-minute changes and enhancements to the product's functionalities, beyond the agreed-upon scope. This leads to increased development efforts, changes in priorities, and potential conflicts within the team. The additional work disrupts the established timeline and impacts the overall project delivery.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "Personnel turnover: One of the software developers unexpectedly resigns from the team due to personal reasons or a better job opportunity. This results in a loss of domain knowledge and expertise, requiring the remaining team members to adjust their workload and potentially onboard a new developer. The transition period adds additional strain on the project timeline and team dynamics.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "One of the software developers accidentally deletes a critical code base, leading to a loss of several days' worth of work and delaying the project timeline.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "A software developer introduces a bug while implementing a new feature, causing the product to crash frequently and requiring significant time and effort to identify and resolve the issue.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "The team's database experiences a sudden failure, resulting in the loss of important patient data and requiring extensive recovery efforts and potential data loss.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "One of the software developers leaves the team unexpectedly, creating a skills gap and disrupting the project's momentum until a replacement can be hired and trained.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "The project encounters unforeseen compatibility issues with a crucial third-party software component, necessitating significant rework and integration efforts to ensure compatibility, impacting the project's timeline and budget.",
      tags: ["technical", "negative"],
    },
    {
      message:
        "One of the software developers discovers a neat optimization technique that improves the performance of a crucial algorithm in the product, reducing its execution time by 50%.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "The team successfully integrates a new third-party API into the product, providing users with access to a valuable feature that enhances the overall functionality and user experience.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "During a code review session, a developer identifies a potential security vulnerability and suggests a simple and effective fix. Implementing this fix ensures the product's data remains secure and strengthens its overall reliability.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "The team receives positive feedback from early adopters of the healthcare product, complimenting the intuitive user interface design and seamless navigation. This feedback boosts the team's morale and validates their efforts.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "The team organizes a knowledge-sharing session, where each developer shares a valuable technical skill or best practice they have learned recently. This initiative not only enhances the team's collective knowledge but also fosters a sense of camaraderie and collaboration among the members.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "The team successfully completes a critical milestone ahead of schedule, allowing them to focus on additional features and improvements for the product.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "During a code review session, one of the developers discovers and resolves a potential security vulnerability, preventing any potential data breaches in the future.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "The team collaboratively tackles a particularly challenging bug and finally fixes it, resulting in improved performance and a seamless user experience for the healthcare product.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "One of the developers attends a technical conference specifically related to digital healthcare, gaining insights and knowledge that they subsequently share with the rest of the team, enhancing everyone's understanding of industry best practices.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "The team receives positive feedback from users during a user testing session, validating their efforts and boosting their motivation to deliver an even more exceptional product.",
      tags: ["technical", "positive"],
    },
    {
      message:
        "The team successfully performs a thorough user study, gaining valuable insights on user needs and preferences.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "The development team receives positive feedback from a key stakeholder on a recent product demo, boosting morale.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "A team member proposes an innovative feature idea that gets unanimously approved and integrated into the product roadmap.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "The team organizes a team-building activity where they participate in a virtual escape room, strengthening their bond.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "The project manager secures additional funding for the project, allowing the team to invest in cutting-edge technology for development.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "The team celebrates a milestone by ordering custom-branded merchandise for everyone, fostering a sense of pride and unity.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "A team member presents the product at a conference and receives recognition for their exceptional presentation skills.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "The product undergoes a comprehensive security audit and passes with flying colors, ensuring data protection for users.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "An unexpected bug is quickly identified and resolved before it causes significant impact, preventing any disruption to the product's functionality.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "The team receives positive user feedback on a new feature release, indicating that it is being well-received and adding value to users' lives.",
      tags: ["non-technical", "positive"],
    },
    {
      message:
        "Inefficient database queries resulting in slow retrieval of patient data.",
      tags: ["problem", "low-severity"],
    },
    {
      message:
        "Compatibility issues between different versions of operating systems causing the software to crash.",
      tags: ["problem", "low-severity"],
    },
    {
      message:
        "Integration problems with external third-party systems leading to data synchronization issues.",
      tags: ["problem", "low-severity"],
    },
    {
      message:
        "Memory leaks in the software, causing it to consume excessive system resources.",
      tags: ["problem", "low-severity"],
    },
    {
      message:
        "Inconsistent user interface across different platforms, creating confusion for healthcare professionals.",
      tags: ["problem", "low-severity"],
    },
    {
      message:
        "Cross-site scripting vulnerabilities, potentially exposing patient data to unauthorized access.",
      tags: ["problem", "low-severity"],
    },
    {
      message:
        "Inadequate error handling leading to undefined behavior and potential data corruption.",
      tags: ["problem", "low-severity"],
    },
    {
      message:
        "Lack of proper documentation for code modules, making it difficult for developers to understand and maintain.",
      tags: ["problem", "low-severity"],
    },
    {
      message:
        "Inconsistent coding styles among team members, resulting in code readability issues and reduced collaboration.",
      tags: ["problem", "low-severity"],
    },
    {
      message:
        "Performance bottlenecks during peak usage times, causing delays in data processing and response times.",
      tags: ["problem", "low-severity"],
    },
  ],
};
