interface TimedEvent {
    "TimeBetweenEvents": number;
    "NextEvent": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function TimedEvent(ptr_or_class: string|AnySDKClass): TimedEvent;