## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Links and Resources

- **Live Demo**: [Fed2 JavaScript Assignment](https://fed2-javascript-2-odin.vercel.app/)
- **Design Mockup**: [Figma Design](https://www.figma.com/file/d0uJVB1LTmUN6U8Pl2gQja/JS-Assignment-Odin?type=design&node-id=0%3A1&mode=design&t=Aw34f5b7MGT3PNpy-1)

Feel free to explore the live demo and review the design mockup to get a better understanding of the project's UI/UX design and functionality.

# Group Report - Course Assignment JS-2

\*\* By Torjus Nilsen, Bendik Bjerkeset and Krystian Cruz

### introduction.

In this CA we team Odin we have been tasked with creating a front-end client social media site. We have used supabase for our database and API to store our data such as users and posts. We have used react netx.js frameworks to build our website as well as tailwind CSS for the styling. As inspiration we have tried to create a clone of the existing social media site Twitter or X as it is called now.

### Frameworks and components library

We as a team like to use next.js because it’s a framework we have become comfortable to work in. Next.js has very good compatibility with other plugins and extensions, which can help a lot to extend and customize our application better. It works good with shadcn ui which is a component library we have used to style our components. It's easy to install and work with it and comes with prebuild components that we further style with tailwind CSS. It allows us to have ownership and control over the code, allowing us to decide how the components are built and styled and work well with next.js.

### The pages

The main layout on the page is mostly the same with 3 containers. A left side bar, right side bar and middle container. In the left side bar, we have the navbar where you can navigate through the site. The right sidebar has the profiles and other users of the social media platform. The main container has the feed of posts, post function, more detailed information of other profiles and user of the site. The feed page has a list of all posts created by you and other users. You can filter search through the posts click on each of the posts and get a better view and more detailed perspective of the post. On your profile page you can see the posts you have created a short bio of the person's profile as well as your own bio and the option of following the person and message them.

## Individual section

## Components Developed by Bendik Bjerkeset

### Navigation

- **Responsive Navbar**: Created responsive navigation bar to ensure seamless navigation across different device sizes.

### Home Page

- **Feed Component**: Developed a modular feed component which is prominently featured on both the home page and the user-specific profile page.
- **Card Component**: Implemented a card component that effectively displays posts retrieved from our backend server.
- **Post Settings Component**: Integrated a dropdown menu UI from Shadcn, facilitating backend interactions for post deletion and updates.
- **Create Post Component**: Constructed a form that interfaces with the backend to upload text content as posts.

### Registration Page

- **Sign-Up / Registration Form**: Established a registration form facilitating user sign-up either via GitHub or email. However, as of now, only the GitHub registration method maintains the user session, thus it is recommended for accessing the full functionality of the platform.

### Backend Logic

- **Database Connection**: The platform is wired to a Supabase database. Rather than employing the latest SDK features, a more traditional approach utilizing URL-based fetch requests was adopted to meet the current assignment criteria. All asynchronous fetch functions have been consolidated into a single file within the `lib` directory to maintain a clean and clear import structure.

### Torjus Nilsen

I have worked on a little bit of everything, mostly on the front-end side of the project. I have worked on styling, design and functionalities. More specifically I have worked on things such as filter and search functionality. I worked on bug fixing and other smaller implementations to the front-end user experience.

### Krystian Gere Cruz

[Your section here...]

### Summary

In summary this CA was a good experience for the whole team and as individuals. We have become more comfortable working in teams and next.js. We have struggled in some eras and succeeded better than others. We have been better at communicating through the team and continuously merging and pooling requests from GitHub, so we all are constantly updated on where we are and what we have done. As far work distribution has gone Bendik has worked well and done most of the heavy backend coding and working with the API, as our group leader and lead developer he has done a very good job leading us through this assignment. As Torjus and Krystian have worked mostly on the front-end side of the project, such design and the little extra that makes the pages look better. We have worked a lot on the feed page, home, and profile.
