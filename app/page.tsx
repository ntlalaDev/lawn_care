'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layout, Menu, Button, Card, Form, Input, Modal, Tabs, Typography, Row, Col, Carousel } from 'antd'
import { MenuOutlined, CrownOutlined } from '@ant-design/icons'

import Image from 'next/image'
import grassIMG from '/assets/img/grass.jpg'
import grassCut2IMG from '/assets/img/grassCut1.jpg'
import grassCut1IMG from '/assets/img/grassCut2.jpg'
import flowerCareIMG from '/assets/img/flowerCare.jpg'
import leavesCutIMG from '/assets/img/leavesCut.jpg'
import pruning2IMG from '/assets/img/pruning2.jpg'
import prunningIMG from '/assets/img/prunning.jpg'
import treepruneIMG from '/assets/img/treeprune.jpg'

import grassCut1IMG from '/assets/img/grassCut1.jpg'
import grassCut2IMG from '/assets/img/grassCut2.jpg'


const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography
const { TabPane } = Tabs

const goldGradient = 'linear-gradient(135deg, #FFD700, #FFA500)'
const emeraldGradient = 'linear-gradient(135deg, #50C878, #00A86B)'

// Define an interface for the form values
interface FormValues {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export default function RoyalLawnCareExperience() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [form] = Form.useForm()

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showModal = () => setIsModalVisible(true)
  const handleCancel = () => setIsModalVisible(false)

  const handleSubmit = async (values: FormValues) => {
    console.log('Form values:', values)
    setIsModalVisible(false)
    form.resetFields()
  }

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

  const services = [
    { title: 'Royal Lawn Mowing', description: 'Precision mowing fit for palace grounds' },
    { title: 'Regal Hedge Sculpting', description: 'Artistic topiary worthy of royal gardens' },
    { title: 'Majestic Irrigation', description: 'State-of-the-art watering systems for lush landscapes' },
    { title: 'Noble Landscaping', description: 'Bespoke landscape design for discerning royalty' },
  ]

  const beforeAfterProjects = [
    {
      title: 'Palace Garden Transformation',
      before: grassIMG,
      after: grassCut1IMG,
    },
    {
      title: 'Royal Courtyard Renovation',
      before: leavesCutIMG,
      after: pruning2IMG,
    },
    {
      title: 'Majestic Front Lawn Makeover',
      before: prunningIMG,
      after: treepruneIMG,
    },
    {
      title: 'Regal Estate Overhaul',
      before: flowerCareIMG,
      after: grassCut2IMG,
    },
  ];

  return (
    <Layout className="min-h-screen bg-black">
      <Header
        className="fixed w-full z-10 transition-all duration-300"
        style={{
          background: scrollPosition > 50 ? 'rgba(0,0,0,0.8)' : 'transparent',
          boxShadow: scrollPosition > 50 ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        <div className="flex justify-between items-center h-full px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
            style={{ background: goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Royal Lawn Care
          </motion.div>
          <div className="lg:hidden">
            <Button type="text" onClick={toggleMenu} icon={<MenuOutlined style={{ color: '#FFD700' }} />} />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            className="hidden lg:flex bg-transparent border-0"
            selectedKeys={[]}
            items={[
              { key: 'home', label: 'Home' },
              { key: 'services', label: 'Services' },
              { key: 'portfolio', label: 'Portfolio' },
              { key: 'about', label: 'About' },
              { key: 'contact', label: 'Contact' },
            ]}
            style={{ background: 'transparent' }}
          />
        </div>
      </Header>

      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-16 left-0 right-0 z-20 bg-black bg-opacity-90 lg:hidden"
          >
            <Menu
              theme="dark"
              mode="vertical"
              className="w-full"
              items={[
                { key: 'home', label: 'Home' },
                { key: 'services', label: 'Services' },
                { key: 'portfolio', label: 'Portfolio' },
                { key: 'about', label: 'About' },
                { key: 'contact', label: 'Contact' },
              ]}
              style={{ background: 'transparent' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Content>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
          >
            <source src="https://kxuoqojlzazcbhbqhqrv.supabase.co/storage/v1/object/public/videos/pexels-kelly-2880501-3840x2160-25fps.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#FFD700' }}>
                Regal Lawns Await
              </Title>
              <Paragraph className="text-xl md:text-2xl mb-10 text-white">
                Experience lawn care fit for royalty
              </Paragraph>
              <Button
                type="primary"
                size="large"
                onClick={showModal}
                className="text-lg px-8 py-3 h-auto"
                style={{ background: goldGradient, border: 'none' }}
              >
                Request Royal Treatment
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4" style={{ background: emeraldGradient }}>
          <div className="container mx-auto">
            <Title level={2} className="text-center text-white mb-12">Our Royal Services</Title>
            <Row gutter={[32, 32]}>
              {services.map((service, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      hoverable
                      className="h-full bg-black bg-opacity-50 border-2 border-yellow-400"
                      bodyStyle={{ padding: '24px' }}
                    >
                      <CrownOutlined style={{ fontSize: '48px', color: '#FFD700', marginBottom: '16px' }} />
                      <Title level={4} style={{ color: '#FFD700' }}>{service.title}</Title>
                      <Paragraph style={{ color: 'white' }}>{service.description}</Paragraph>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Before and After Portfolio Section */}
        <section className="py-20 px-4 bg-black">
          <div className="container mx-auto">
            <Title level={2} className="text-center mb-12" style={{ color: '#FFD700' }}>Royal Transformations</Title>
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="All Projects" key="1">
                <Row gutter={[32, 32]}>
                  {beforeAfterProjects.map((project, index) => (
                    <Col xs={24} md={12} lg={6} key={index}>
                      <Card
                        hoverable
                        className="h-full"
                        cover={
                          <Carousel autoplay>
                            <div><Image src={project.before} alt={project.title} /></div>
                            <div><Image src={project.after} alt={project.title} /></div>
                          </Carousel>
                        }
                      >
                        <Card.Meta title={project.title} description="See the royal difference" />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </TabPane>
            </Tabs>
          </div>
        </section>
      </Content>

      {/* Contact Form Modal */}
      <Modal title="Request Royal Treatment" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }]}>
            <Input type="email" placeholder="Your Email" />
          </Form.Item>
          <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
            <Input placeholder="Your Phone" />
          </Form.Item>
          <Form.Item name="message" label="Message">
            <Input.TextArea rows={4} placeholder="Your Message" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" style={{ background: goldGradient, border: 'none' }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Footer className="text-center text-white" style={{ background: 'black' }}>
        Royal Lawn Care ©2023 Created for Discerning Royalty
      </Footer>
    </Layout>
  )
}
