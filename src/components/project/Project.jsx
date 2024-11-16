import { Card, CardBody, CardHeader, Image, Snippet } from '@nextui-org/react'
import { projects } from '../../projects'
import FooterCard from './FooterCard'

export function Project () {
  return (
    <section id='proyectos' className='w-full mx-auto lg:max-w-4xl md:max-w-2xl '>
      <h1 className='text-5xl font-bold mt-5 mb-5'>Proyectos Destacados</h1>
      <div className='grid mt-10 gap-24 grid-cols-1 mx-auto'>
        {
          projects.map(item => (

            <Card key={item.id} className='lg-h-[720px]'>
              <CardBody className='flex-initial overflow-visible p-0'>
                <Image
                  shadow='md'
                  alt={item.name}
                  className='object-cover rounded-xl max-h-96'
                  src='https://jvitelli.com/wp-content/uploads/2022/05/github-copilot.jpg'
                  width='100%'
                />
              </CardBody>
              <div className='mt-2'>
                {
                  item.technologies.map((tech, id) => (
                    <Snippet key={id} className='m-2 border-solid border-2 border-white h-6 md:h-8 text-sm' variant='shadow' hideCopyButton hideSymbol color='danger'> {tech} </Snippet>
                  ))
                }
              </div>

              <CardHeader className='pt-2 px-4 flex-col items-start'>
                <h1 className='text-3xl my-3'> {item.name} </h1>
                <small className='text-default-500 my-3'> {item.text1} </small>
                <small className='text-default-500 my-3'> {item.text2} </small>
              </CardHeader>
              <FooterCard url={item.url} page={item.page} />
            </Card>
          ))
        }
      </div>
    </section>

  )
}
