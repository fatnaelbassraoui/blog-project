import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import library from '../Assets/library.jfif'
import ourTeam from '../Assets/ourTeam.jfif'
import libraryEvents from '../Assets/libraryEvents.jfif'
import ScrollToTopButton from '../Components/ScrollToTopButton'

const AboutUsStory = () => {
    return (
        <>
            <NavBar />
            <div className="container flex justify-center pl-6">
                <div className="content py-2 px-10 w-[75%] ">
                    <img
                        src={ourTeam}
                        className=" w-[600px] h-[600px] float-left pr-4 "
                        alt="ourTeam"
                    ></img>

                    <div className="item-body w-[100%] text-justify">
                        <h5 className="font-bold mt-5">Cosa Facciamo</h5>
                        <div className="indent-1 ">
                            <h4 className="font-semibold">Salone el Libro</h4>
                            <p>
                                I cinque giorni del Salone raccontati dai
                                ragazzi e dalle ragazze: interviste agli ospiti,
                                resoconti, reportage dalla fiera. Potete
                                riconoscere i Bookbloggers tra i padiglioni del
                                Lingotto per le loro magliette rosse. Dal 19 al
                                22 maggio 2022
                            </p>

                            <h4 className="font-semibold">Pordenonelegge</h4>
                            <p>
                                Ogni anno la redazione si ritrova a Pordenone
                                per la sua famosa festa dei libri con gli
                                autori. Cronisti e croniste seguono gli incontri
                                e ne scrivono qui.
                            </p>

                            <h4 className="font-semibold">
                                Festival Internazionale a Ferrara
                            </h4>
                            <p>
                                Giornalisti in erba raccontano il festival del
                                settimanale che ogni settimana raccoglie il
                                meglio dei giornali e delle riviste straniere.
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Assumenda, placeat!{' '}
                            </p>
                        </div>

                        <div className="text-justify mt-6">
                            <h4 className="font-bold">
                                Com'è nato il nostro Blog
                            </h4>
                            <p>
                                Eveniet necessitatibus sapiente laboriosam
                                distinctio rem aut consequatur, quasi in eius
                                eum sit incidunt fugiat voluptatem, modi esse
                                nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias.
                            </p>
                        </div>
                        <div className="text-justify mt-5">
                            <img
                                className=" w-[400px]  float-right pl-4 pt-6"
                                src={libraryEvents}
                                alt=""
                            />
                            <h4 className="font-bold mt-5">I nostri eventi</h4>
                            <p>
                                Eveniet necessitatibus sapiente laboriosam
                                distinctio rem aut consequatur, quasi in eius
                                eum sit incidunt fugiat voluptatem, modi esse
                                nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias.
                            </p>
                        </div>
                        <div className="text-justify mt-5">
                            <img
                                className=" w-[400px]  float-right pl-4 pt-6"
                                src={library}
                                alt=""
                            />
                            <h4 className="font-bold">
                                La nostra libreria on-line
                            </h4>
                            <p>
                                Eveniet necessitatibus sapiente laboriosam
                                distinctio rem aut consequatur, quasi in eius
                                eum sit incidunt fugiat voluptatem, modi esse
                                nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Assumenda,
                                placeat! Eveniet necessitatibus sapiente
                                laboriosam distinctio rem aut consequatur, quasi
                                in eius eum sit incidunt fugiat voluptatem, modi
                                esse nostrum alias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </>
    )
}

export default AboutUsStory
