import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { useSelector } from 'react-redux'

const AdminHome = () => {
    const {user} = useSelector(state => state.auth)
  return (
    <Layout>
        <div className='d-flex flex-column mt-4'>
            <h1>Welcome Admin <i className='text-success'>{user?.name}</i></h1>
            <h3>Manage Blood Bank App</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue mauris rhoncus aenean vel elit scelerisque mauris. Quis varius quam quisque id. Ut diam quam nulla porttitor massa id neque. Nec feugiat in fermentum posuere. Neque viverra justo nec ultrices dui. Ut eu sem integer vitae justo. Arcu non sodales neque sodales. Suscipit adipiscing bibendum est ultricies integer quis auctor. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Neque viverra justo nec ultrices dui sapien eget. Ornare massa eget egestas purus viverra accumsan in nisl. In nisl nisi scelerisque eu ultrices vitae. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Amet mauris commodo quis imperdiet massa tincidunt.

Dui sapien eget mi proin sed libero enim sed faucibus. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. In fermentum posuere urna nec tincidunt praesent. Lacus sed turpis tincidunt id aliquet risus. Duis tristique sollicitudin nibh sit amet. Vitae auctor eu augue ut lectus. Eget duis at tellus at urna condimentum mattis. Sed risus pretium quam vulputate. Morbi enim nunc faucibus a. Id cursus metus aliquam eleifend mi in. Integer vitae justo eget magna fermentum iaculis eu non diam.

Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Diam quam nulla porttitor massa id. Leo integer malesuada nunc vel risus commodo viverra. Eu augue ut lectus arcu bibendum at varius. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Vehicula ipsum a arcu cursus vitae. Lacus laoreet non curabitur gravida arcu. Pulvinar sapien et ligula ullamcorper. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Proin sed libero enim sed faucibus turpis. Praesent elementum facilisis leo vel fringilla. Sagittis vitae et leo duis ut. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Laoreet non curabitur gravida arcu ac. Felis eget velit aliquet sagittis id. Augue ut lectus arcu bibendum at varius. Euismod nisi porta lorem mollis aliquam ut porttitor. Volutpat commodo sed egestas egestas fringilla. Proin libero nunc consequat interdum varius. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.</p>
        </div>
    </Layout>
  )
}

export default AdminHome