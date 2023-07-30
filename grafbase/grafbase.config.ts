import { g, auth, config } from '@grafbase/sdk'

// User

const User=g.model('User',{
  name:g.string().length({min:2,max:20}),
  email:g.string().unique(),
  avatarUrl:g.url(),
  description:g.string().optional(),
  githubUrl:g.url().optional(),
  linkedInUrl:g.url().optional(),
  projects:g.relation(()=>Project).list().optional(),

})


// Product

const  Project =g.model('Project',{
  title:g.string().length({min:3}),
  description:g.string(),
  image:g.url(),
  liveSiteUrl:g.url(),
  github:g.url(),
  category:g.string().search(),
  createdBy:g.relation(()=>User),


})




export default config({
  schema: g

})
