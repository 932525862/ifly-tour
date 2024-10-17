import { useContext } from 'react';
import { StateContext } from '../../App';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const ToggleModal = () => {
  const { t } = useTranslation();
  const { modalOpen, setModalOpen } = useContext(StateContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const botToken = import.meta.env.VITE_REACT_APP_BOT_TOKEN;
  const chatId = import.meta.env.VITE_REACT_APP_CHAT_ID;

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    reset(); // Modal yopilganda formni tozalash
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          chat_id: chatId,
          text: `Ism: ${data.name}\nEmail: ${data.email}\nMavzu: ${data.subject}\nXabar: ${data.message}`,
        }
      );
      if (response.data.ok) {
        toast.success(t('contact__toast-success'), { autoClose: 3000 });
        toggleModal();
        reset(); // Muvaffaqiyatli yuborilgandan so'ng formni tozalash
      } else {
        toast.error(t('contact__toast-error'));
      }
    } catch (error) {
      toast.error(t('contact__toast-error'));
    }
  };

  return (
    <div>
      {modalOpen && (
        <div className="container mx-auto px-5">
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[450px]">
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-semibold mb-4">
                  {t('contact__heading')}
                </h2>
                <button
                  className="flex justify-center items-center text-white text-4xl p-2 bg-orange-500 rounded-md cursor-pointer"
                  onClick={toggleModal}
                >
                  <IoClose />
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block mb-1">{t('contact__label-1')}</label>
                  <input
                    type="text"
                    className={`border p-3 w-full h-12 text-lg ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('name', { required: 'Ismni kiriting' })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1">{t('contact__label-2')}</label>
                  <input
                    type="email"
                    className={`border p-3 w-full h-12 text-lg ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('email', { required: 'Emailni kiriting' })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1">{t('contact__label-3')}</label>
                  <input
                    type="text"
                    className={`border p-3 w-full h-12 text-lg ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('subject', { required: 'Mavzuni kiriting' })}
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block mb-1">{t('contact__label-4')}</label>
                  <textarea
                    className={`border p-3 w-full h-24 text-lg ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('message', { required: 'Xabarni kiriting' })}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white p-3 rounded hover:bg-gray-200 transition"
                >
                  {t('button__contact')}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleModal;
