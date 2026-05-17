<?php
declare(strict_types=1);

// Geodescription SDK base feature

class GeodescriptionBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GeodescriptionContext $ctx, array $options): void {}
    public function PostConstruct(GeodescriptionContext $ctx): void {}
    public function PostConstructEntity(GeodescriptionContext $ctx): void {}
    public function SetData(GeodescriptionContext $ctx): void {}
    public function GetData(GeodescriptionContext $ctx): void {}
    public function GetMatch(GeodescriptionContext $ctx): void {}
    public function SetMatch(GeodescriptionContext $ctx): void {}
    public function PrePoint(GeodescriptionContext $ctx): void {}
    public function PreSpec(GeodescriptionContext $ctx): void {}
    public function PreRequest(GeodescriptionContext $ctx): void {}
    public function PreResponse(GeodescriptionContext $ctx): void {}
    public function PreResult(GeodescriptionContext $ctx): void {}
    public function PreDone(GeodescriptionContext $ctx): void {}
    public function PreUnexpected(GeodescriptionContext $ctx): void {}
}
