import './styles/index.scss';

import Alert from '../components/alert';
import Button from '../components/button';
import Card from '../components/card';
import CardContent from '../components/card-content';
import Carousel from '../components/carousel';
import CarouselItem from '../components/carousel-item';
import Checkbox from '../components/checkbox';
import Col from '../components/col';
import Collapse from '../components/collapse';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import Icon from '../components/icon';
import Input from '../components/input';
import Layout from '../components/layout';
import List from '../components/list';
import ListItem from '../components/list-item';
import Popover from '../components/popover';
import Progress from '../components/progress';
import Radio from '../components/radio';
import Row from '../components/row';
import Select from '../components/select';
import Slider from '../components/slider';
import Switch from '../components/switch';
import Tag from '../components/tag';
import Time from '../components/time';
import Timeline from '../components/timeline';
import TimelineItem from '../components/timeline-item';
import Tooltip from '../components/tooltip';
import Transition from '../components/transition';

const components = [
    Alert,
    Button,
    Card,
    CardContent,
    Carousel,
    CarouselItem,
    Checkbox,
    Col,
    Collapse,
    Content,
    Footer,
    Header,
    Icon,
    Input,
    Layout,
    List,
    ListItem,
    Popover,
    Progress,
    Radio,
    Row,
    Select,
    Slider,
    Switch,
    Tag,
    Time,
    Timeline,
    TimelineItem,
    Tooltip,
    Transition,
]

const install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const b = {
    version: process.env.VERSION,
    install,
    ...components,
}

export default b;