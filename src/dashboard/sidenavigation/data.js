import HomeIcon from './icons/home';
import MediasIcon from './icons/medias';
import ContactIcon from './icons/contact';
import ServersIcon from './icons/servers';
import TerminalIcon from './icons/terminal';
import SettingsIcon from './icons/settings';
import RecycleBinIcon from './icons/recycle-bin';
import DocumentationIcon from './icons/documentation';
import {ChartPieIcon,UsersIcon,AnnotationIcon,BookOpenIcon,ChatIcon,ChatAlt2Icon,StarIcon ,CogIcon} from "@heroicons/react/solid"

const data = [
  {
    title: 'Overview',
    icon: <ChartPieIcon className="w-6 h-6" />,
    link: '/admin/',
  },
  {
    title: 'Users',
    icon: <UsersIcon className="w-6 h-6" />,
    link: '/admin/users',
  },
  
  {
    title: 'Subjects',
    icon: <BookOpenIcon className="w-6 h-6" />,
    link: '/admin/subjects',
  },
  {
    title: 'Comments',
    icon: <AnnotationIcon className="w-6 h-6" />,
    link: '/admin/subjectreviews',
  },
  {
    title: 'Setting',
    icon: <CogIcon className="w-6 h-6" />,
    link: '/admin/#',
  },
  
 
];

export default data;
