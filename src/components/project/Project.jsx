import { Card, CardBody, CardHeader, Image, Snippet, Link, Button } from '@nextui-org/react'
import { projects } from '../../projects'

export function Project () {
  return (
    <section className='pt-2 ml-10 m-10'>
      <h1 className='text-5xl font-bold mt-5 mb-5'>Proyectos Destacados</h1>
      <div className='grid mt-10 gap-10 grid-cols-1 md:grid-cols-2 md:mx-12 lg:gap-20 xl:grid-cols-3 xl:mx-28'>
        {
          projects.map(item => (

            <Card key={item.id} className='flex flex-col h-[800px]'>
              <CardBody className='flex-initial overflow-visible p-0'>
                <Image
                  shadow='sm'
                  alt={item.name}
                  className='object-cover rounded-xl '
                  src='https://beecrowd.io/wp-content/uploads/2022/08/Beecrowd-Agosto-6-02-larger.png'
                  width='100%'
                />
              </CardBody>
              <CardHeader className='pt-2 px-4 flex-col items-start'>
                <h1 className='text-3xl my-3'> {item.name} </h1>
                <small className='text-default-500 my-3'> {item.text1} </small>
                <small className='text-default-500 my-3'> {item.text2} </small>
              </CardHeader>
              <Link className='pl-5' href={item.url}>Ir al proyecto</Link>

              <div className='mt-auto'>
                <Button
                  className='flex'
                  href={item.page}
                  as={Link}
                  color='primary'
                  showAnchorIcon
                  variant='solid'
                >
                  Probar
                </Button>
                {
                  item.technologies.map((tech, id) => (
                    <Snippet key={id} className='m-2 border-solid border-2 border-white h-6 md:h-8 text-sm' variant='shadow' hideCopyButton hideSymbol color='danger'> {tech} </Snippet>
                  ))
                }
              </div>
            </Card>
          ))
        }
      </div>
    </section>

  )
}
