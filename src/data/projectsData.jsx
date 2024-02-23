// Imports such as images, gifs, videos
import smallsh from '../assets/images/smallsh.png';
import warningTape from '../assets/images/warning-tape.png'

const projectsData = [
    {
        id: 1,
        img: warningTape,
        title: "TO-DO",
        tools: "To-do, to-do, to-do",
        repo: "",
        link: "",
        linktext: "",
        modalContent: (
            <>
            </>
        )
    },
    {
        id: 2,
        img: warningTape,
        title: "TO-DO",
        tools: "To-do, to-do, to-do",
        repo: "",
        link: "",
        linktext: "",
        modalContent: (
            <>
            </>
        )
    },
    {
        id: 3,
        img: smallsh,
        title: "smallsh",
        tools: "C, UNIX Process API",
        repo: "https://www.github.com/allenjbb/smallsh/",
        link: "",
        linktext: "For source code and detailed installation and usage instructions, click the link below!",
        modalContent: (
            <>
                
                <h2 className='pb-4 text-xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                    Project Overview and Goals
                </h2>
                
                <p className='font-geneva text-gray-800 dark:text-gray-300'>
                    <strong>smallsh</strong> is a custom shell program designed to emulate basic functionalities of well-known shells like bash.
                </p>
                <img
                    src='https://github.com/allenjbb/smallsh/assets/105831767/403fcd34-299e-4794-b477-441ab4ebab48'
                    alt='Example of an `echo` command'
                    loading='lazy'
                    className='w-full h-auto py-2'
                />
                <p className='font-geneva text-gray-800 dark:text-gray-300'>
                    The goal of this project was to create a lightweight, efficient shell that can handle command execution, 
                    signal processing, and environment variable expansion. It's a user-friendly interface for interacting with the 
                    operating system at a more granular level, and is especially suitable for beginners looking to explore shell concepts.
                </p>

                <h2 className='pt-8 pb-4 text-xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                    My Role and Contributions
                </h2>
                <p className='font-geneva text-gray-800 dark:text-gray-300'>
                    As the sole developer of <strong>smallsh</strong>, I took on the entire development process. 
                </p>

                <h2 className='pt-8 pb-4 text-xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                    Technologies and Skills
                </h2>
                <p className='font-geneva text-gray-800 dark:text-gray-300'>
                    The project was developed in C, utilizing Unix/Linux system calls and libraries for process management and signal handling. 
                    Skills demonstrated include advanced C programming, Unix/Linux system programming, memory management, and development of custom 
                    data structures (linked lists).
                </p>

                <h2 className='pt-8 pb-4 text-xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                    Key Features and Functionalities
                </h2>
                <p className='font-geneva text-gray-800 dark:text-gray-300'>
                    Key features of <strong>smallsh</strong> include:
                    <ul className='list-disc pl-4'>
                        <li className='py-2'>
                            <span>
                                Expansion of the variable <code className='border rounded-md px-1 py-0.5 bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>$$</code> to the current process ID.
                            </span>
                            <img
                                src='https://github.com/allenjbb/smallsh/assets/105831767/978db7f4-9292-4130-9cb9-be5bbb94196e'
                                alt='Example of variable expansion for `$$`'
                                loading='lazy'
                                className='w-full h-auto py-2'
                            /> 
                        </li>
                        <li className='py-2'>
                            <span>
                                Built-in commands like <code className='border rounded-md px-1 py-0.5 bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>cd</code>, <code className='border rounded-md px-1 py-0.5 bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>status</code>, and <code  className='border rounded-md px-1 py-0.5 bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>exit</code>.
                            </span>
                            <img
                                src='https://github.com/allenjbb/smallsh/assets/105831767/88c9dda8-feeb-405b-8e56-576210be0d0a'
                                alt='Examples of built-in command usage'
                                loading='lazy'
                                className='w-full h-auto py-2'
                            /> 
                        </li>
                        <li className='py-2'>
                            <span>
                                Input/output redirection using <code className='border rounded-md px-1 py-0.5 bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>&lt;</code> and <code  className='border rounded-md px-1 py-0.5 bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>&gt;</code>.
                            </span>
                            <img
                                src='https://github.com/allenjbb/smallsh/assets/105831767/b44862d6-b13e-4c16-9bc7-33cf0c2e8490'
                                alt='Examples of input and output redirection using `<` and `>`'
                                loading='lazy'
                                className='w-full h-auto py-2'
                            /> 
                        </li>
                        <li className='py-2'>
                            <span>
                                Execution of command-line instructions with support for foreground and background processes using <code className='border rounded-md px-1 py-0.5 bg-gray-100 dark:bg-gray-800 dark:border-gray-700'>&</code>.
                            </span>
                            <img
                                src='https://github.com/allenjbb/smallsh/assets/105831767/1f6575c0-7867-45cb-a4e4-880ab69eaf7d'
                                alt='Examples of foreground and background processes'
                                loading='lazy'
                                className='w-full h-auto py-2'
                            /> 
                        </li>
                        <li className='py-2'>
                            <span>
                                Signal handling for SIGINT and SIGTSTP to manage foreground processes and toggle foreground-only mode respectively.
                            </span>
                            <img
                                src='https://github.com/allenjbb/smallsh/assets/105831767/41a1f1ed-9ecf-425e-81a6-534d37c9e3b3'
                                alt='Examples of signal handling for SIGINT and SIGTSTP'
                                loading='lazy'
                                className='w-full h-auto py-2'
                            /> 
                        </li>
                    </ul>
                    The implementation of these features required a deep understanding of process control and signal handling in Unix/Linux environments.
                </p>

                <h2 className='pt-8 pb-4 text-xl font-geneva font-bold text-gray-800 dark:text-gray-300'>
                    Challenges and Learning Outcomes
                </h2>
                <p className='font-geneva text-gray-800 dark:text-gray-300'>
                    Managing zombie processes and ensuring the shell didn't leave any orphaned processes was essential for both the success of the project and the survival of my development environment. 
                    This challenge led to a deeper understanding of process life cycles and improved my skills in resource management 
                    and debugging in a Unix/Linux environment.
                </p>    
                <p className='pt-4 font-geneva text-gray-800 dark:text-gray-300'>    
                    Another notable challenge was implementing signal handling (SIGINT, SIGTSTP) without affecting the shell’s responsiveness 
                    and background processes. I overcame this by deep diving into Unix signal handling and process control, eventually crafting a 
                    solution that seamlessly integrated with the existing command execution framework.
                </p>
            </>
        )
    },
    {
        id: 4,
        img: warningTape,
        title: "TO-DO",
        tools: "To-do, to-do, to-do",
        repo: "",
        link: "",
        linktext: "",
        modalContent: (
            <>
            </>
        )
    }
];

export default projectsData;
