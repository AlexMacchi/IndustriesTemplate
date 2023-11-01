import Subscribe from '@/components/subscribe/Subscribe';
import styles from '../../styles/industries/industries.module.css'

import DescriptionSection from "@/components/description/Description";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import AchivementSection from '@/components/achievement/Achivement';
import BlogCard from '@/components/cards/blog/Blog';

export default function Industries() {
    return (
        <div className={styles.container}>
            
            {/* HERO BANNER */}
            <HeroBanner 
                heading='Automation Warehouse'
                paragraph='We are a team of passionate and experienced engineers, 
                dedicated to providing exceptional solutions while prioritizing 
                professionalism and confidentiality.'
                button_text='OUR WORK'
            />
            {/* ------------------------------------------------------------------------------ */}
            {/* DESCRIPTION SECTION */}
            <DescriptionSection 
                urlImg='./images/AutomationWarehouse.jpg'
                first_paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo nunc velit, et auctor ante pulvinar id. 
                Proin viverra tincidunt felis, sit amet ornare urna hendrerit vel. Sed id maximus tortor. Aliquam commodo dictum 
                sem et malesuada. Nulla a tortor egestas tortor dictum rutrum. Cras ac nibh eget purus porta suscipit eget sed nunc. 
                Curabitur pellentesque nunc sed mattis sodales. Donec ullamcorper massa at ultricies fringilla. Sed velit sapien, 
                interdum sit amet dui eu, dictum interdum libero. Sed varius nisl vulputate nisi congue, ac pulvinar est mattis. 
                Mauris quis suscipit libero. Proin semper cursus feugiat. Fusce nec libero sit amet ligula finibus accumsan vitae 
                vel purus. Aliquam eget dapibus enim, eget blandit ex.'
                second_paragraph='Suspendisse volutpat purus non malesuada faucibus. Donec laoreet bibendum arcu, nec porta turpis varius id. Donec 
                ut nisi placerat, tempor diam eget, vehicula urna. Curabitur non malesuada velit, eu elementum dolor. Quisque elementum 
                dictum felis, sit amet ullamcorper tortor facilisis at. Sed tempor rhoncus mi, eu eleifend dui iaculis ut. Phasellus 
                ligula eros, faucibus vel lacus ac, maximus consectetur enim. Aliquam libero felis, consequat nec erat ut, malesuada 
                efficitur diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse vitae sem eget nisl blandit 
                tincidunt nec vel ipsum.'
            />
            {/* ------------------------------------------------------------------------------ */}
            {/* SUBSCRIBE WITH E-MAIL */}
            <Subscribe />
            {/* ACHIVEMENT SECTION */}
            <AchivementSection />
            {/* ------------------------------------------------------------------------------ */}
            {/* BLOG SECTION */}
            <BlogCard />
            Industries
        </div>
    )
}