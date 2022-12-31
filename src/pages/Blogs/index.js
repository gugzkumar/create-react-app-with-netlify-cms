import {
    Button, ButtonGroup, Card,
    CardBody, CardFooter, Container,
    Divider, Heading, Image, Show,
    SimpleGrid, Spacer, Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import blogPosts from '../../cmsConfigs/blogs.json';

blogPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
});
const blogPostsPreview = blogPosts.map(post => {
    return {
        title: post.title,
        description: post.description,
        date: new Date(post.date),
        routePath: post.routePath,
        image: post.image
    };
});

const BlogPreview = (props) => {
    const { title, date, description, routePath, image } = props;
    return (
        <Card style={{ border: "1px solid lightgrey" }}>
            <CardBody>
                <Show above='lg'>
                    <Image
                        src={image}
                        borderRadius='xl'
                        objectFit='cover'
                        mx='auto'
                    />
                </Show>
                <Heading my={[2, 4]} size={['sm', 'md']}>
                    {title}
                </Heading>
                <Text noOfLines={[3, 5]} size={['xs', 'sm']}>
                    {description}
                </Text>
            </CardBody>
            <Divider></Divider>
            <CardFooter alignItems='center' className='blog-preview-card-footer'>
                <ButtonGroup spacing='2'>
                    <Link to={`/${routePath}`}>
                        <Button size={['sm', 'md']} colorScheme='blue'>Read</Button>
                    </Link>
                </ButtonGroup>
                <Spacer />
                <Text as="i" color={'gray'} size={['xs', 'sm']}>
                    {date.toDateString()}
                </Text>
            </CardFooter>
        </Card>
    )
}

const Blog = () => {
    return (
        <Container maxW='container.xl'>
            <SimpleGrid spacing={[2, 8, 16]} columns={[1, 2, 2, 3]} p={[2, 8, 16]}>
                {blogPostsPreview.map(post =>
                    <BlogPreview
                        key={post.routePath}
                        title={post.title}
                        date={post.date}
                        routePath={post.routePath}
                        image={post.image}
                        description={post.description}
                    />
                )}
            </SimpleGrid>
        </Container>
    );
}

export default Blog;