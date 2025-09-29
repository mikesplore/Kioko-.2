import { useState, useEffect } from 'react';
import { User, CreditCard, Users, CalendarDays, BarChart2, Book, Settings, Plus, Search, Edit, Trash2, Mail, Phone } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// AdminLTE Styles Component
const AdminLTEStyles = () => (
  <style>{`
    /* AdminLTE Color Scheme */
    :root {
      --primary: #3c8dbc;
      --success: #00a65a;
      --info: #00c0ef;
      --warning: #f39c12;
      --danger: #dd4b39;
      --light-blue: #3c8dbc;
      --navy: #001f3f;
      --teal: #39cccc;
      --olive: #3d9970;
      --lime: #01ff70;
      --orange: #ff851b;
      --fuchsia: #f012be;
      --purple: #605ca8;
      --maroon: #d81b60;
      --black: #111;
      --gray: #d2d6de;
    }

    /* Main Wrapper */
    .container {
      font-family: 'Source Sans Pro', sans-serif;
      background-color: #ecf0f5;
      min-height: 100vh;
      padding: 0;
    }

    /* Header Styling */
    .header-container {
      background-color: var(--primary);
      color: white;
      padding: 15px;
      margin-bottom: 0;
      border-bottom: 1px solid #367fa9;
    }

    .dashboard-title {
      color: white;
      font-size: 24px;
      margin: 0;
    }

    .welcome-text {
      color: #f4f4f4 !important;
    }

    /* Stats Cards */
    .stat-card {
      background-color: white;
      border-top: 3px solid var(--primary);
      border-radius: 3px;
      box-shadow: 0 1px 1px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }

    .bg-blue-500 { background-color: var(--primary) !important; }
    .bg-green-500 { background-color: var(--success) !important; }
    .bg-yellow-500 { background-color: var(--warning) !important; }
    .bg-red-500 { background-color: var(--danger) !important; }
    .bg-purple-500 { background-color: var(--purple) !important; }
    .bg-orange-500 { background-color: var(--orange) !important; }

    /* Quick Access Links */
    .bg-blue-50 { background-color: #e8f4fc; }
    .bg-green-50 { background-color: #e8f5e9; }
    .bg-purple-50 { background-color: #f3e5f5; }
    .bg-orange-50 { background-color: #fff3e0; }

    /* Chart Area */
    .chart-area {
      background-color: #f9f9f9;
      border: 1px solid #eee;
    }

    /* Recent Activities */
    .activity-border {
      border-color: #f4f4f4;
    }

    /* Buttons */
    .btn-primary {
      background-color: var(--primary);
      border-color: var(--primary);
    }

    .btn-primary:hover {
      background-color: #357ca5;
      border-color: #357ca5;
    }

    .btn-success {
      background-color: var(--success);
      border-color: var(--success);
    }

    .btn-success:hover {
      background-color: #00954e;
      border-color: #00954e;
    }

    .btn-warning {
      background-color: var(--warning);
      border-color: var(--warning);
    }

    .btn-danger {
      background-color: var(--danger);
      border-color: var(--danger);
    }

    /* Progress Bars */
    .progress-bg {
      background-color: #f4f4f4;
    }

    /* Text Colors */
    .text-blue-600 {
      color: var(--primary);
    }
    .text-green-600 {
      color: var(--success);
    }
    .text-purple-600 {
      color: var(--purple);
    }
    .text-orange-600 {
      color: var(--orange);
    }

    /* Box styling */
    .adminlte-box {
      border-radius: 3px;
      margin-bottom: 20px;
      box-shadow: 0 1px 1px rgba(0,0,0,0.1);
      background-color: white;
    }

    /* Table styling */
    .adminlte-table {
      width: 100%;
      border-collapse: collapse;
    }

    .adminlte-table th {
      background-color: #f4f4f4;
      border-bottom: 2px solid #ddd;
      padding: 12px 8px;
      text-align: left;
      font-weight: 600;
      color: #444;
    }

    .adminlte-table td {
      padding: 12px 8px;
      border-bottom: 1px solid #f4f4f4;
      vertical-align: middle;
    }

    .adminlte-table tbody tr:hover {
      background-color: #f9f9f9;
    }

    /* Avatar styling */
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
    }

    /* Badge styling */
    .badge {
      padding: 4px 8px;
      border-radius: 3px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
    }

    .badge-success {
      background-color: var(--success);
      color: white;
    }

    .badge-warning {
      background-color: var(--warning);
      color: white;
    }

    .badge-danger {
      background-color: var(--danger);
      color: white;
    }

    /* Responsive adjustments */
    @media (min-width: 768px) {
      .main-content {
        margin-left: 0;
      }
    }

    /* Sidebar Styles */
    .sidebar {
      background: #222d32;
      color: #b8c7ce;
    }

    .sidebar-header {
      background: #367fa9;
      color: white;
      padding: 15px;
      font-size: 18px;
      font-weight: bold;
    }

    .nav-item {
      padding: 12px 15px;
      border-bottom: 1px solid #2c3b41;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .nav-item:hover {
      background: #2c3b41;
    }

    .nav-item.active {
      background: var(--primary);
      color: white;
    }

    .nav-header {
      padding: 15px;
      font-size: 11px;
      font-weight: 600;
      color: #4b646f;
      text-transform: uppercase;
      background: #1a2226;
    }

    /* Search Box */
    .search-box {
      background-color: #367fa9;
      border: 1px solid #286090;
      color: white;
    }

    .search-box::placeholder {
      color: #b8d4ea;
    }

    /* Breadcrumb */
    .breadcrumb-container {
      background-color: #ecf0f5;
      border-bottom: 1px solid #d2d6de;
      padding: 10px 15px;
    }

    /* Form styling */
    .form-control {
      width: 100%;
      padding: 6px 12px;
      border: 1px solid #d2d6de;
      border-radius: 3px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
    }

    .form-control:focus {
      border-color: var(--primary);
      outline: 0;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 0 3px rgba(60,141,188,.1);
    }

    /* Modal styling */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal-content {
      background-color: white;
      border-radius: 6px;
      box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
      max-width: 90vw;
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      padding: 15px;
      border-bottom: 1px solid #e5e5e5;
      background-color: #f5f5f5;
      border-radius: 6px 6px 0 0;
    }

    .modal-body {
      padding: 15px;
    }

    .modal-footer {
      padding: 15px;
      border-top: 1px solid #e5e5e5;
      background-color: #f5f5f5;
      border-radius: 0 0 6px 6px;
      text-align: right;
    }
  `}</style>
);

// Modal Component
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content w-full max-w-md" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
};

// Student Type (define only once at the top)
type Student = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  course: string;
  status: string;
  enrollmentDate: string;
};

type StudentFormProps = {
  student?: Student | null;
  onSave: (student: Student) => void;
  onCancel: () => void;
};

const StudentForm = ({ student, onSave, onCancel }: StudentFormProps) => {
  const [formData, setFormData] = useState({
    firstName: student?.firstName || '',
    lastName: student?.lastName || '',
    email: student?.email || '',
    phone: student?.phone || '',
    course: student?.course || '',
    status: student?.status || 'Active',
    enrollmentDate: student?.enrollmentDate || new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({
      id: student?.id ?? Date.now(),
      ...formData
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-body">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              className="form-control"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="form-control"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            className="form-control"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-1">Course</label>
            <select
              className="form-control"
              value={formData.course}
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              required
            >
              <option value="">Select Course</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              className="form-control"
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Graduated">Graduated</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Enrollment Date</label>
          <input
            type="date"
            className="form-control"
            value={formData.enrollmentDate}
            onChange={(e) => setFormData({...formData, enrollmentDate: e.target.value})}
            required
          />
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn-success text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save Student
        </button>
      </div>
    </form>
  );
};

// Students Page Component
const StudentsPage = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      phone: '+254712345678',
      course: 'Web Development',
      status: 'Active',
      enrollmentDate: '2024-01-15'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@email.com',
      phone: '+254787654321',
      course: 'Data Science',
      status: 'Active',
      enrollmentDate: '2024-02-20'
    },
    {
      id: 3,
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike.johnson@email.com',
      phone: '+254798765432',
      course: 'Mobile App Development',
      status: 'Graduated',
      enrollmentDate: '2023-09-10'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const filteredStudents = students.filter(student =>
    `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddStudent = () => {
    setEditingStudent(null);
    setIsModalOpen(true);
  };

  const handleEditStudent = (student: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    course: string;
    status: string;
    enrollmentDate: string;
  }) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  // (Removed duplicate Student type definition)
  const handleSaveStudent = (studentData: Student) => {
    if (editingStudent) {
      setStudents(prev => prev.map(s => s.id === studentData.id ? studentData : s));
    } else {
      setStudents(prev => [...prev, studentData]);
    }
    setIsModalOpen(false);
    setEditingStudent(null);
  };

  const handleDeleteStudent = (studentId: number) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(prev => prev.filter(s => s.id !== studentId));
    }
  };

  const getStatusBadge = (status: 'Active' | 'Inactive' | 'Graduated') => {
    const statusClasses: Record<'Active' | 'Inactive' | 'Graduated', string> = {
      'Active': 'badge-success',
      'Inactive': 'badge-warning',
      'Graduated': 'badge-danger'
    };
    return `badge ${statusClasses[status] || 'badge-success'}`;
  };

  return (
    <div className="px-4 py-6">
      <div className="adminlte-box p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Students Management</h2>
          <button
            onClick={handleAddStudent}
            className="btn-primary text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Add New Student
          </button>
        </div>

        <div className="mb-4 flex justify-between items-center">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="form-control pl-10 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-sm text-gray-600">
            Total Students: {students.length}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="adminlte-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Contact</th>
                <th>Course</th>
                <th>Status</th>
                <th>Enrollment Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div className="flex items-center">
                      <div className="avatar mr-3">
                        {student.firstName.charAt(0)}{student.lastName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{student.firstName} {student.lastName}</div>
                        <div className="text-sm text-gray-500">ID: {student.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-sm">
                      <div className="flex items-center mb-1">
                        <Mail size={14} className="mr-2 text-gray-400" />
                        {student.email}
                      </div>
                      <div className="flex items-center">
                        <Phone size={14} className="mr-2 text-gray-400" />
                        {student.phone}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-sm font-medium">{student.course}</span>
                  </td>
                  <td>
                    <span className={getStatusBadge(student.status as 'Active' | 'Inactive' | 'Graduated')}>
                      {student.status}
                    </span>
                  </td>
                  <td>
                    <span className="text-sm">{new Date(student.enrollmentDate).toLocaleDateString()}</span>
                  </td>
                  <td>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditStudent(student)}
                        className="text-blue-600 hover:text-blue-800 p-1"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Users size={48} className="mx-auto mb-4 text-gray-300" />
              <p>No students found</p>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingStudent ? 'Edit Student' : 'Add New Student'}
      >
        <StudentForm
          student={editingStudent}
          onSave={handleSaveStudent}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

// Dashboard Page Component
type Stat = {
  title: string;
  value: number | string;
  icon: JSX.Element;
  color: string;
};

const DashboardPage = () => {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);

  const enrollmentData = [
    { month: 'Jan', students: 45, courses: 3 },
    { month: 'Feb', students: 52, courses: 4 },
    { month: 'Mar', students: 48, courses: 3 },
    { month: 'Apr', students: 61, courses: 5 },
    { month: 'May', students: 55, courses: 4 },
    { month: 'Jun', students: 67, courses: 6 },
    { month: 'Jul', students: 72, courses: 6 },
    { month: 'Aug', students: 69, courses: 5 },
    { month: 'Sep', students: 75, courses: 7 },
    { month: 'Oct', students: 82, courses: 8 },
    { month: 'Nov', students: 89, courses: 8 },
    { month: 'Dec', students: 95, courses: 9 }
  ];

  useEffect(() => {
    setTimeout(() => {
      setStats([
        {
          title: 'Total Students',
          value: 156,
          icon: <Users size={24} />,
          color: 'bg-blue-500',
        },
        {
          title: 'Active Courses',
          value: 8,
          icon: <Book size={24} />,
          color: 'bg-green-500',
        },
        {
          title: 'Total Revenue',
          value: 'KES 425,600',
          icon: <CreditCard size={24} />,
          color: 'bg-purple-500',
        },
        {
          title: 'Upcoming Events',
          value: 3,
          icon: <CalendarDays size={24} />,
          color: 'bg-orange-500',
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const recentActivities = [
    { id: 1, description: 'New student registration', time: '2 hours ago' },
    { id: 2, description: 'Payment received', time: '5 hours ago' },
    { id: 3, description: 'New course material uploaded', time: '1 day ago' },
    { id: 4, description: 'Event booking confirmation', time: '2 days ago' },
  ];

  return (
    <div className="px-4 py-6">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="stat-card p-6 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-700">{stat.title}</h3>
                <div className={`${stat.color} p-2 rounded-full text-white`}>
                  {stat.icon}
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              <a href="#" className="text-blue-600 text-sm mt-2 inline-block hover:underline">
                View details
              </a>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="adminlte-box p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#" className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                <Users size={24} className="text-blue-600 mb-2" />
                <span className="text-sm font-medium">Students</span>
              </a>
              <a href="#" className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
                <CreditCard size={24} className="text-green-600 mb-2" />
                <span className="text-sm font-medium">Payments</span>
              </a>
              <a href="#" className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
                <CalendarDays size={24} className="text-purple-600 mb-2" />
                <span className="text-sm font-medium">Events</span>
              </a>
              <a href="#" className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition">
                <Book size={24} className="text-orange-600 mb-2" />
                <span className="text-sm font-medium">Courses</span>
              </a>
            </div>
          </div>

          <div className="adminlte-box p-6">
            <h2 className="text-xl font-semibold mb-4">Enrollment Overview</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#666"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#666"
                    fontSize={12}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #ddd',
                      borderRadius: '4px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="students" 
                    stroke="#3c8dbc" 
                    strokeWidth={3}
                    dot={{ fill: '#3c8dbc', strokeWidth: 2, r: 4 }}
                    name="Students"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="courses" 
                    stroke="#00a65a" 
                    strokeWidth={3}
                    dot={{ fill: '#00a65a', strokeWidth: 2, r: 4 }}
                    name="Courses"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex justify-center space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Students Enrolled</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Active Courses</span>
              </div>
            </div>
          </div>
        </div>

        <div className="adminlte-box p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start activity-border border-b pb-4 last:border-b-0">
                <div className="bg-blue-100 p-2 rounded-full mr-3 flex-shrink-0">
                  <User size={16} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.description}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-center text-blue-600 text-sm hover:underline">
            View all activities
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component - Simplified for integration
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#ecf0f5' }}>
      <AdminLTEStyles />
      
      {/* Simple section switcher without sidebar */}
      <div className="bg-white shadow-sm border-b border-gray-200 p-4 mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeSection === 'dashboard'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <BarChart2 size={16} className="inline mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveSection('students')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeSection === 'students'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Users size={16} className="inline mr-2" />
            Students
          </button>
        </div>
      </div>
      
      <div className="px-6">
        {activeSection === 'dashboard' ? <DashboardPage /> : <StudentsPage />}
      </div>
    </div>
  );
};

export default Dashboard;