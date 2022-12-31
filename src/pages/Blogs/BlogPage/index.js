import './index.css';
import {
    Box, Center, Heading,
    OrderedList, UnorderedList,
    Spinner, Text, Image,
    ListItem, Container, VStack, Divider, Show
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

const components = {
    h1: ({ node, ...props }) => <Heading size="xl" {...props} />,
    h2: ({ node, ...props }) => <Heading size="lg" {...props} />,
    h3: ({ node, ...props }) => <Heading size="md" {...props} />,
    h4: ({ node, ...props }) => <Heading size="b" {...props} />,
    p: ({ node, ...props }) => <Text {...props}></Text>,
    ul: ({ node, ordered, ...props }) => <UnorderedList {...props} ordered={String(ordered)} />,
    ol: ({ node, ordered, ...props }) => <OrderedList {...props} ordered={String(ordered)} />,
    li: ({ node, ordered, ...props }) => <ListItem {...props} ordered={String(ordered)} />
}

// Create simple fuctional component
const BlogPage = (props) => {
    const { blogFileName } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    useEffect(() => {
        // Write a fetch request to get the blog post
        // from the server
        fetch(`/content/blogs/${blogFileName}.json`)
            .then(res => res.json())
            .then(blogPost => {
                if (blogPost['date'])
                    blogPost['date'] = new Date(blogPost['date']);
                setBlogPost(blogPost);
            })
    }, [blogFileName]);


    return (
        <>
            {
                blogPost === null ?
                    <Box height={300}>
                        <Center height='100%'>
                            <Spinner size={'xl'} />
                        </Center>
                    </Box> :
                    <Container maxW='container.xl' p={[4, 8, 16]}>
                        <VStack align={'flex-start'} className={'blog-content'} spacing={4}>
                            <div>
                                <Show above='lg'>
                                    <Image
                                        style={{ display: 'block', float: 'left', marginRight: '20px' }}
                                        src={blogPost.image}
                                        borderRadius='md'
                                        objectFit='cover'
                                        maxW={'250px'}
                                        mx={'auto'}
                                    />
                                </Show>
                                <VStack align={'flex-start'} spacing={2}>
                                    <Heading size={'xl'}>{blogPost.title}</Heading>
                                    <Text as="i" color={'gray'}>{blogPost.date.toDateString()}</Text>
                                    <Text>{blogPost.description}</Text>
                                    <Show below='lg'>
                                        <Image
                                            style={{ display: 'block', float: 'left', marginRight: '20px' }}
                                            src={blogPost.image}
                                            borderRadius='md'
                                            objectFit='cover'
                                            mx={'auto'}
                                        />
                                    </Show>
                                </VStack>
                            </div>
                            <Divider />
                            <ReactMarkdown components={components}>
                                {blogPost.body}
                            </ReactMarkdown>
                        </VStack>
                    </Container>
            }
        </>
    );
}

export default BlogPage;