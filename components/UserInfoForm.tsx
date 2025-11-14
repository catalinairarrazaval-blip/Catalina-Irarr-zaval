import React, { useState, useEffect } from 'react';
import { UserData } from '../types';

interface Props {
  onSubmit: (data: UserData) => void;
}

const UserInfoForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    rut: '',
    role: '',
    school: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateRut = (rut: string): string => {
    if (!rut) return "El RUT es requerido.";
    const cleanRut = rut.replace(/\./g, '').replace('-', '');
    if (!/^[0-9]+[0-9kK]{1}$/.test(cleanRut)) {
        return "Formato de RUT inválido. Ej: 12.345.678-9";
    }
    const dv = cleanRut.slice(-1).toLowerCase();
    const body = cleanRut.slice(0, -1);
    let sum = 0;
    let multiple = 2;
    for (let i = body.length - 1; i >= 0; i--) {
        sum += parseInt(body.charAt(i), 10) * multiple;
        multiple = multiple < 7 ? multiple + 1 : 2;
    }
    const dvCalc = 11 - (sum % 11);
    const dvExpected = dvCalc === 11 ? '0' : dvCalc === 10 ? 'k' : dvCalc.toString();

    if (dv !== dvExpected) {
        return "El dígito verificador del RUT es incorrecto.";
    }
    return "";
  };

  const validatePhone = (phone: string): string => {
      if (!phone) return "El teléfono es requerido.";
      if (!/^(\+?56)?(9)?[2-9]\d{7}$/.test(phone.replace(/\s+/g, ''))) {
          return "Formato inválido. Ej: 912345678 o +56912345678";
      }
      return "";
  };
  
  const validateField = (name: string, value: string): string => {
      switch(name) {
          case 'name':
              return value ? '' : 'El nombre es requerido.';
          case 'rut':
              return validateRut(value);
          case 'role':
              return value ? '' : 'El cargo es requerido.';
          case 'school':
              return value ? '' : 'El colegio es requerido.';
          case 'phone':
              return validatePhone(value);
          default:
              return '';
      }
  };

  useEffect(() => {
    const newErrors: Record<string, string> = {};
    let isAllValid = true;
    for (const key in formData) {
      const fieldName = key as keyof UserData;
      const error = validateField(fieldName, formData[fieldName]);
      if(error) {
        isAllValid = false;
        // only show error if field is dirty
        if(formData[fieldName]) newErrors[fieldName] = error;
      }
    }
    // FIX: Added a type guard `typeof val === 'string'` to satisfy the TypeScript compiler,
    // which was inferring `val` as `unknown`.
     const requiredFieldsFilled = Object.values(formData).every(val => typeof val === 'string' && val.length > 0);
     setIsFormValid(requiredFieldsFilled && Object.keys(newErrors).length === 0);
  }, [formData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit(formData);
    } else {
        // Trigger validation for all fields to show missing required messages
        const newErrors: Record<string, string> = {};
        let isAllValid = true;
        for (const key in formData) {
            const fieldName = key as keyof UserData;
            const error = validateField(fieldName, formData[fieldName]);
            if(error) {
                isAllValid = false;
                newErrors[fieldName] = error;
            }
        }
        setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200">
      <h2 className="text-2xl font-bold text-sky-800 mb-2">Bienvenido/a</h2>
      <p className="text-slate-600 mb-6">Para comenzar, por favor completa tus datos. Son necesarios para el análisis.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
            />
             {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="rut" className="block text-sm font-medium text-slate-700 mb-1">RUT</label>
            <input
              type="text"
              name="rut"
              id="rut"
              value={formData.rut}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 ${errors.rut ? 'border-red-500' : 'border-slate-300'}`}
            />
            {errors.rut && <p className="text-red-500 text-xs mt-1">{errors.rut}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700 mb-1">Cargo en el establecimiento</label>
          <input
            type="text"
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 ${errors.role ? 'border-red-500' : 'border-slate-300'}`}
          />
          {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="school" className="block text-sm font-medium text-slate-700 mb-1">Nombre del Colegio</label>
            <input
              type="text"
              name="school"
              id="school"
              value={formData.school}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 ${errors.school ? 'border-red-500' : 'border-slate-300'}`}
            />
            {errors.school && <p className="text-red-500 text-xs mt-1">{errors.school}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-sky-600 text-white font-bold py-3 px-4 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            Comenzar Análisis
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfoForm;