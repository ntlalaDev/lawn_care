'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layout, Menu, Button, Card, Form, Input, Modal, Tabs, Typography, Row, Col, Carousel } from 'antd'
import { MenuOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined, CrownOutlined } from '@ant-design/icons'

import Image from 'next/image'
import grassIMG from '/app/assets/img/grass.jpg'
import grassCut2IMG from '/app/assets/img/grassCut1.jpg'
import grassCut1IMG from '/app/assets/img/grassCut2.jpg'
import flowerCareIMG from '/app/assets/img/flowerCare.jpg'
import leavesCutIMG from '/app/assets/img/leavesCut.jpg'
import pruning2IMG from '/app/assets/img/pruning2.jpg'
import prunningIMG from '/app/assets/img/prunning.jpg'
import treepruneIMG from '/app/assets/img/treeprune.jpg'



const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography
const { TabPane } = Tabs

const goldGradient = 'linear-gradient(135deg, #FFD700, #FFA500)'
const emeraldGradient = 'linear-gradient(135deg, #50C878, #00A86B)'

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

  const handleSubmit = async (values: any) => {
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
            <Col xs={24} md={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  hoverable
                  className="bg-gray-900 border-2 border-yellow-400"
                  cover={
                    <Carousel autoplay>
                      <div>
                        <Image
                          src={project.before}
                          alt="Before"
                          width={650}
                          height={850}
                          className="rounded border-5 border-white shadow-lg mx-auto"
                        />
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white p-2">Before</div>
                      </div>
                      <div>
                        <Image
                          src={project.after}
                          alt="After"
                          width={650}
                          height={850}
                          className="rounded border-5 border-white shadow-lg mx-auto"
                        />
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white p-2">After</div>
                      </div>
                    </Carousel>
                  }
                >
                  <Card.Meta
                    title={<span style={{ color: '#FFD700' }}>{project.title}</span>}
                    description={<span style={{ color: 'white' }}>A majestic transformation</span>}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </TabPane>
    </Tabs>
  </div>
</section>
        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-black">
          <div className="container mx-auto text-center">
            <Title level={2} style={{ color: '#FFD700' }} className="mb-6">Ready for a Majestic Lawn?</Title>
            <Paragraph className="text-lg mb-8 text-white">
              Let our royal experts transform your outdoor space into a paradise fit for kings and queens.
            </Paragraph>
            <Button
              type="primary"
              size="large"
              onClick={showModal}
              className="text-lg px-8 py-3 h-auto"
              style={{ background: goldGradient, border: 'none' }}
            >
              Claim Your Royal Treatment
            </Button>
          </div>
        </section>
      </Content>

      <Footer style={{ background: '#111', borderTop: '1px solid #333' }}>
        <div className="container mx-auto">
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Title level={3} style={{ color: '#FFD700' }}>Royal Lawn Care</Title>
              <Paragraph style={{ color: 'white' }}>Lawn care services fit for royalty.</Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Title level={3} style={{ color: '#FFD700' }}>Contact the Royal Court</Title>
              <Paragraph style={{ color: 'white' }}><PhoneOutlined /> (555) ROYAL-LC</Paragraph>
              <Paragraph style={{ color: 'white' }}><MailOutlined /> royal@lawncare.com</Paragraph>
              <Paragraph style={{ color: 'white' }}><EnvironmentOutlined /> 1 Palace Gardens, Regal City</Paragraph>
            </Col>
            <Col xs={24} md={8}>
              <Title level={3} style={{ color: '#FFD700' }}>Royal Hours</Title>
              <Paragraph style={{ color: 'white' }}><ClockCircleOutlined /> Mon-Fri: 9am-6pm</Paragraph>
              <Paragraph style={{ color: 'white' }}><ClockCircleOutlined /> Sat: 10am-4pm</Paragraph>
              <Paragraph style={{ color: 'white' }}><ClockCircleOutlined /> Sun: By Royal Appointment</Paragraph>
            </Col>
          </Row>
          <div className="mt-8 text-center">
            <p style={{ color: '#888' }}>&copy; 2023 Royal Lawn Care. All rights royally reserved.</p>
          </div>
        </div>
      </Footer>

      {/* Royal Consultation Modal */}
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={500}
        bodyStyle={{ padding: 0 }}
        className="royal-modal"
      >
        <div style={{
          background: `url('/placeholder.svg?height=600&width=500') no-repeat center center`,
          backgroundSize: 'cover',
          borderRadius: '8px 8px 0 0',
          height: '150px',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px 8px 0 0'
          }}>
            <CrownOutlined style={{ fontSize: '64px', color: '#FFD700' }} />
          </div>
        </div>
        <div style={{
          background: '#1a1a1a',
          padding: '24px',
          borderRadius: '0 0 8px 8px',
          border: '2px solid #FFD700',
          borderTop: 'none'
        }}>
          <Title level={3} style={{ color: '#FFD700', textAlign: 'center', marginBottom: '24px' }}>
            Request Your Royal Lawn Consultation
          </Title>
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item name="name" label={<span style={{ color: '#FFD700' }}>Your Royal Name</span>} rules={[{ 
              required: true,
              message: 'Please enter your name'
            }]}>
              <Input style={{
                background: '#333',
                borderColor: '#FFD700',
                color: 'white',
                borderRadius: '4px'
              }} />
            </Form.Item>
            <Form.Item name="email" label={<span style={{ color: '#FFD700' }}>Royal Email</span>} rules={[{
              required: true,
              message: 'Please enter your email'
            }, { type: 'email', message: 'Please enter a valid email' }]}>
              <Input style={{
                background: '#333',
                borderColor: '#FFD700',
                color: 'white',
                borderRadius: '4px'
              }} />
            </Form.Item>
            <Form.Item name="phone" label={<span style={{ color: '#FFD700' }}>Royal Phone</span>} rules={[{
              required: true,
              message: 'Please enter your phone number'
            }]}>
              <Input style={{
                background: '#333',
                borderColor: '#FFD700',
                color: 'white',
                borderRadius: '4px'
              }} />
            </Form.Item>
            <Form.Item name="message" label={<span style={{ color: '#FFD700' }}>Your Royal Request</span>}>
              <Input.TextArea rows={4} style={{
                background: '#333',
                borderColor: '#FFD700',
                color: 'white',
                borderRadius: '4px'
              }} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{
                  background: goldGradient,
                  border: 'none',
                  height: '40px',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Submit Royal Request
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>

      <style jsx global>{`
        .royal-modal .ant-modal-content {
          background-color: transparent;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
          overflow: hidden;
        }
        .royal-modal .ant-modal-close {
          color: #FFD700;
        }
        .royal-modal .ant-modal-close:hover {
          color: #FFA500;
        }
        .royal-modal .ant-form-item-label > label {
          font-weight: bold;
        }
        .royal-modal .ant-input:focus,
        .royal-modal .ant-input-focused,
        .royal-modal .ant-input:hover {
          border-color: #FFA500;
          box-shadow: 0 0 0 2px rgba(255, 165, 0, 0.2);
        }
      `}</style>
    </Layout>
  )
}