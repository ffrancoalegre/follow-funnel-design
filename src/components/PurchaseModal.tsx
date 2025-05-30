
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle } from "lucide-react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planFollowers: string;
  planPrice: string;
}

interface FormData {
  email: string;
  phone: string;
  instagramProfile: string;
}

const PurchaseModal = ({ isOpen, onClose, planName, planFollowers, planPrice }: PurchaseModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    instagramProfile: ""
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (step === 1) {
      // Validar que todos los campos estén completos
      if (formData.email && formData.phone && formData.instagramProfile) {
        setStep(2);
      }
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleConfirm = () => {
    // Aquí se procesaría la compra
    console.log("Compra confirmada:", { planName, planFollowers, planPrice, ...formData });
    onClose();
    setStep(1);
    setFormData({ email: "", phone: "", instagramProfile: "" });
  };

  const resetModal = () => {
    setStep(1);
    setFormData({ email: "", phone: "", instagramProfile: "" });
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const isFormValid = formData.email && formData.phone && formData.instagramProfile;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {step === 1 ? "Datos de Compra" : "Confirmar Datos"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
              <h3 className="font-semibold text-lg">{planName}</h3>
              <p className="text-sm opacity-90">{planFollowers} seguidores</p>
              <p className="text-xl font-bold">{planPrice}</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  Teléfono *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+54 9 11 1234-5678"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="instagram" className="text-sm font-medium">
                  Perfil de Instagram *
                </Label>
                <Input
                  id="instagram"
                  type="text"
                  placeholder="@tuusuario"
                  value={formData.instagramProfile}
                  onChange={(e) => handleInputChange("instagramProfile", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="flex items-start space-x-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <p className="font-medium">Importante:</p>
                  <p>Tu cuenta de Instagram debe estar configurada como <strong>pública</strong> para que podamos entregar los seguidores correctamente.</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleNextStep} 
              disabled={!isFormValid}
              className="w-full btn-instagram"
              size="lg"
            >
              Continuar
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
              <h3 className="font-semibold text-lg">{planName}</h3>
              <p className="text-sm opacity-90">{planFollowers} seguidores</p>
              <p className="text-xl font-bold">{planPrice}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Confirma tus datos
              </h3>

              <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-600">Email:</span>
                  <p className="text-gray-900">{formData.email}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Teléfono:</span>
                  <p className="text-gray-900">{formData.phone}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">Perfil de Instagram:</span>
                  <p className="text-gray-900">{formData.instagramProfile}</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-green-800">
                  <p>Verificaremos que tu cuenta esté pública antes de procesar la entrega.</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button 
                onClick={handleBack} 
                variant="outline"
                className="flex-1"
                size="lg"
              >
                Volver
              </Button>
              <Button 
                onClick={handleConfirm} 
                className="flex-1 btn-instagram"
                size="lg"
              >
                Confirmar Compra
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
