'use client'
import { AuthUser } from '@supabase/supabase-js';
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import EmojiPicker from '../global/emoji-picker';
import { Input } from '../ui/input';
import { z } from 'zod';
import {  useForm } from 'react-hook-form';
import { CreateWorkspaceFormSchema } from '@/lib/types';
import { Subscription } from '@/lib/supabase/supabase.types';

interface DashboardSetupProps {
    user: AuthUser;
    subscription: Subscription | null;
  }
  const DashboardSetup: React.FC<DashboardSetupProps> = ({
    subscription,
    user,
  }) => {

    const [selectedEmoji, setSelectedEmoji] = useState('😺');
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting: isLoading, errors },
      } = useForm<z.infer<typeof CreateWorkspaceFormSchema>>({
        mode: 'onChange',
        defaultValues: {
          logo: '',
          workspaceName: '',
        },
      });
  return (
    <div>
      <Card className='w-[600px] h-screen sm:h-auto'>
        <CardHeader>
          <CardTitle>Create a Work Space</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Minus, beatae. Error inventore tenetur vero explicabo maiores necessitatibus.
            Quas, at dolorum?
          </CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={()=>{}}>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <div className='text-5xl'>
                            <EmojiPicker getValue={(emoji) =>setSelectedEmoji}>{selectedEmoji}</EmojiPicker>
                        </div>
                        <div className='w-full '>
                            <label htmlFor='workspaceName' className='text-sm text-muted-foreground'>
                                Name    
                            </label>
                              <Input {...register("workspaceName" , {required:"Workspace name is required"})} disabled={isLoading} placeholder='WorkspaceName' id="workspaceName" type="text"/>
                              <small className="text-red-600">{errors?.workspaceName?.message?.toString()}</small> 

                        </div>
                    </div>
                    <div>
                    <label htmlFor='logo' className='text-sm text-muted-foreground'>
                                Workspace Logo
                            </label>
                              <Input 
                              accept='image/*'
                              {...register("logo" , {required:"Workspace name is required"})} disabled={isLoading ||  subscription?.status != 'active'} placeholder='WorkspaceName' id="logo" type="file"/>
                              <small className="text-red-600">{errors?.logo?.message?.toString()}</small>
                    </div>
                  </div>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default DashboardSetup

